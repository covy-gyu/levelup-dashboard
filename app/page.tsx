import Image from "next/image";
import LevelupLogo from '@/ui/logo';
import { ArrowRightIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { shimmer } from "@/ui/animations";

export default function Page() {
    return (
        <main className="flex flex-col min-h-screen p-4">
            {/* 로고 섹션 */}
            <div className={`${shimmer} relative overflow-hidden`}>
                <div className="flex items-center h-20 p-2 bg-blue-500 rounded-lg">
                    <LevelupLogo />
                </div>
            </div>

            {/* 마케팅 텍스트 및 이미지 섹션 */}
            <div className="flex flex-col gap-4 mt-4 grow md:flex-row">
                <div className="flex flex-col justify-center gap-6 px-6 py-10 rounded-lg bg-gray-50 md:w-3/5 md:px-20">
                    <p className="text-xl text-gray-800 md:text-3xl md:leading-normal">
                        <strong>대시보드에 오신 걸 환영합니다.</strong> <br />
                        Next.js 웹 애플리케이션 성능을 분석하는 대시보드입니다.
                    </p>

                    {/* 로그인 및 회원가입 링크 */}
                    <div className="flex gap-2">
                        <Link href="/login" className="...">
                            로그인 <ArrowRightIcon ... />
                        </Link>
                        <Link href="/signup" className="...">
                            회원가입 <UserPlusIcon .../>
                        </Link>
                    </div>
                </div>

                {/* 반응형 이미지 섹션 */}
                <div className="flex items-center justify-center p-6 md:w-4/5 md:px-70 md:py-12">
                    <Image src="/hero-desktop.png" ... />
                    <Image src="/hero-mobile.png" ... />
                </div>
            </div>
        </main >
    );
}