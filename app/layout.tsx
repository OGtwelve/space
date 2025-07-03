import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "三体计算星座媒体相关报道",
  description: "太空计算卫星星座成功发射，将人工智能送上太空。查看省级媒体报道、国家级媒体报道和项目时间线。",
  keywords: "三体计算星座,太空计算,人工智能,卫星星座,媒体报道",
    generator: 'v0.dev',
    icons:{
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.ico",
    }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
