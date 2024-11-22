'use server'
import {z} from 'zod'
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { sql } from "@vercel/postgres";
import { User } from "@/types/definitions";

const EmailSchema = z.string().email({message: 'Invalid email address.'});
const PasswordSchema = z.string().min(6, {message: 'Password must be at least 6 characters long.'});
const NameShema = z.string().min(1, {message: 'Name cannot be empty.'});

export async function signUp(prevState: string|undefined, formData: FormData)
{
    // 각 필드 유효성 검사
    const emailValidation = EmailSchema.safeParse(formData.get('email'));
    const passwordValidation = PasswordSchema.safeParse(formData.get('password'));
    const nameValidation = NameShema.safeParse(formData.get('name'));

    const email = emailValidation.data;
    const password = passwordValidation.data;
    const name = nameValidation.data;
    const authKey = uuidv4();

    try {
        // 이메일 중복 검사
        const existingUser = await sql`SELECT * FROM users WHERE email = ${email}`;
        if(existingUser.rowCount > 0) {return 'Email already exists.';}

        // 비밀번호 해싱 및 사용자 추가
        const hashedPassword = await bcrypt.hash(password, 10);
        await sql`
            INSERT INTO users (name, email, password, auth_key) VALUES (${name}, ${email}, ${hashedPassword}, ${authKey})
        `;

        // return 'User successfully created.';
    } catch (error) {
        return 'Failed to create user.';
    }
    
    revalidatePath('/login');
    redirect(`/login?signup=success&email=${email}`);
}