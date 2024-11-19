import { ChartBarIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';

export default function LevelupLogo() {
    return (
        <Link href="/">
            <div className="flex flex-row items-center text-white">
                <ChartBarIcon className="..." />
                <p className="...">Dashboard</p>
            </div>
        </Link>
    )
}