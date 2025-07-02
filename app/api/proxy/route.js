// app/api/proxy/route.js
export const runtime = 'nodejs'  // 或 'edge'，根据你想要的运行时选

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const target = searchParams.get('url')
    if (!target) {
        return new Response('Missing url', { status: 400 })
    }

    // 服务器端 fetch
    const upstream = await fetch(target, {
        headers: { 'User-Agent': 'Next.js Proxy' }
    })

    // 读取二进制
    const buffer = await upstream.arrayBuffer()

    // 透传 content-type
    const contentType = upstream.headers.get('content-type') || 'text/html'

    // 返回给客户端，但不带 X-Frame-Options 等头
    return new Response(buffer, {
        status: 200,
        headers: {
            'Content-Type': contentType,
            // 你也可以加 Cache-Control 等
            'Cache-Control': 'public, max-age=300, s-maxage=600',
        }
    })
}
