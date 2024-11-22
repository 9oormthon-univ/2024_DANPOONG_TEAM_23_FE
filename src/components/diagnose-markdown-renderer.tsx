import { useEffect, useState } from 'react'
import * as runtime from 'react/jsx-runtime'
import { evaluate } from '@mdx-js/mdx'

import Clip from '~/assets/svgs/clip.svg?react'

function DiagnoseMarkdownRenderer({ mdxSource }: { mdxSource: string }) {
  const [content, setContent] = useState<React.ReactElement | null>(null)

  useEffect(() => {
    const compileMDX = async () => {
      const { default: MDXContent } = await evaluate(mdxSource, runtime)
      setContent(<MDXContent />)
    }

    compileMDX().catch((error: unknown) => {
      console.error(error)
    })
  }, [mdxSource])

  return (
    <div className="relative">
      <Clip className="absolute left-1/2 -translate-x-1/2" />
      <div className="mt-14 rounded-md border border-gray-50 bg-white px-3.5 py-3.5 shadow-2">
        <div className="prose mx-auto rounded-md border border-dashed border-primary-100 px-5 py-3.5">
          {content}
        </div>
      </div>
    </div>
  )
}

export { DiagnoseMarkdownRenderer }
