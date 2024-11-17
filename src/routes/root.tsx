function Root() {
  return (
    <div className="flex w-full flex-col gap-8 p-4">
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Typography</h2>
        <div className="flex flex-col gap-4">
          <span className="text-[24px] font-bold leading-[150%] tracking-[2%]">
            H1 24PX 단풍톤 DPT BOLD 150% 2%
          </span>
          <span className="text-[22px] font-bold leading-[150%] tracking-[2%]">
            H2 22PX 단풍톤 DPT BOLD 150% 2%
          </span>
          <span className="text-[20px] font-bold leading-[150%] tracking-[2%]">
            H3 20PX 단풍톤 DPT BOLD 150% 2%
          </span>
          <span className="text-[18px] font-bold leading-[150%] tracking-[2%]">
            BODY1 18PX 단풍톤 DPT BOLD 150% 2%
          </span>
          <span className="text-[18px] font-normal leading-[150%] tracking-[2%]">
            BODY2 18PX 단풍톤 DPT REGULAR 150% 2%
          </span>
          <span className="text-[16px] font-medium leading-[150%] tracking-[2%]">
            BODY3 16PX 단풍톤 DPT MEDIUM 150% 2%
          </span>
          <span className="text-[16px] font-normal leading-[150%] tracking-[2%]">
            BODY4 16PX 단풍톤 DPT REGULAR 150% 2%
          </span>
          <span className="text-[14px] font-medium leading-[150%] tracking-[2%]">
            CAPTION1 14PX 단풍톤 DPT MEDIUM 150% 2%
          </span>
          <span className="text-[12px] font-medium leading-[150%] tracking-[2%]">
            CAPTION2 12PX 단풍톤 DPT MEDIUM 150% 2%
          </span>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Rounding</h2>
        <div className="flex gap-4">
          <div className="size-40 rounded-xs bg-gray-800" />
          <div className="size-40 rounded-sm bg-gray-800" />
          <div className="size-40 rounded-md bg-gray-800" />
          <div className="size-40 rounded-lg bg-gray-800" />
          <div className="size-40 rounded-xl bg-gray-800" />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Colors</h2>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Primary</h3>
          <div className="flex">
            <div className="h-12 w-24 bg-primary-50" />
            <div className="h-12 w-24 bg-primary-100" />
            <div className="h-12 w-24 bg-primary-200" />
            <div className="h-12 w-24 bg-primary-300" />
            <div className="h-12 w-24 bg-primary-400" />
            <div className="h-12 w-24 bg-primary-500" />
            <div className="h-12 w-24 bg-primary-600" />
            <div className="h-12 w-24 bg-primary-700" />
            <div className="h-12 w-24 bg-primary-800" />
            <div className="h-12 w-24 bg-primary-900" />
          </div>

          <h3 className="text-xl font-semibold">Secondary</h3>
          <div className="flex">
            <div className="h-12 w-24 bg-secondary-50" />
            <div className="h-12 w-24 bg-secondary-100" />
            <div className="h-12 w-24 bg-secondary-200" />
            <div className="h-12 w-24 bg-secondary-300" />
            <div className="h-12 w-24 bg-secondary-400" />
            <div className="h-12 w-24 bg-secondary-500" />
            <div className="h-12 w-24 bg-secondary-600" />
            <div className="h-12 w-24 bg-secondary-700" />
            <div className="h-12 w-24 bg-secondary-800" />
            <div className="h-12 w-24 bg-secondary-900" />
          </div>

          <h3 className="text-xl font-semibold">Error</h3>
          <div className="flex">
            <div className="h-12 w-24 bg-error-50" />
            <div className="h-12 w-24 bg-error-100" />
            <div className="h-12 w-24 bg-error-200" />
            <div className="h-12 w-24 bg-error-300" />
            <div className="h-12 w-24 bg-error-400" />
            <div className="h-12 w-24 bg-error-500" />
            <div className="h-12 w-24 bg-error-600" />
            <div className="h-12 w-24 bg-error-700" />
            <div className="h-12 w-24 bg-error-800" />
            <div className="h-12 w-24 bg-error-900" />
          </div>

          <h3 className="text-xl font-semibold">Success</h3>
          <div className="flex">
            <div className="h-12 w-24 bg-success-50" />
            <div className="h-12 w-24 bg-success-100" />
            <div className="h-12 w-24 bg-success-200" />
            <div className="h-12 w-24 bg-success-300" />
            <div className="h-12 w-24 bg-success-400" />
            <div className="h-12 w-24 bg-success-500" />
            <div className="h-12 w-24 bg-success-600" />
            <div className="h-12 w-24 bg-success-700" />
            <div className="h-12 w-24 bg-success-800" />
            <div className="h-12 w-24 bg-success-900" />
          </div>

          <h3 className="text-xl font-semibold">Warning</h3>
          <div className="flex">
            <div className="h-12 w-24 bg-warning-50" />
            <div className="h-12 w-24 bg-warning-100" />
            <div className="h-12 w-24 bg-warning-200" />
            <div className="h-12 w-24 bg-warning-300" />
            <div className="h-12 w-24 bg-warning-400" />
            <div className="h-12 w-24 bg-warning-500" />
            <div className="h-12 w-24 bg-warning-600" />
            <div className="h-12 w-24 bg-warning-700" />
            <div className="h-12 w-24 bg-warning-800" />
            <div className="h-12 w-24 bg-warning-900" />
          </div>

          <h3 className="text-xl font-semibold">Info</h3>
          <div className="flex">
            <div className="h-12 w-24 bg-info-50" />
            <div className="h-12 w-24 bg-info-100" />
            <div className="h-12 w-24 bg-info-200" />
            <div className="h-12 w-24 bg-info-300" />
            <div className="h-12 w-24 bg-info-400" />
            <div className="h-12 w-24 bg-info-500" />
            <div className="h-12 w-24 bg-info-600" />
            <div className="h-12 w-24 bg-info-700" />
            <div className="h-12 w-24 bg-info-800" />
            <div className="h-12 w-24 bg-info-900" />
          </div>

          <h3 className="text-xl font-semibold">Gray</h3>
          <div className="flex">
            <div className="h-12 w-24 bg-gray-50" />
            <div className="h-12 w-24 bg-gray-100" />
            <div className="h-12 w-24 bg-gray-200" />
            <div className="h-12 w-24 bg-gray-300" />
            <div className="h-12 w-24 bg-gray-400" />
            <div className="h-12 w-24 bg-gray-500" />
            <div className="h-12 w-24 bg-gray-600" />
            <div className="h-12 w-24 bg-gray-700" />
            <div className="h-12 w-24 bg-gray-800" />
            <div className="h-12 w-24 bg-gray-900" />
          </div>

          <h3 className="text-xl font-semibold">Background</h3>
          <div className="flex">
            <div className="h-12 w-24 bg-background-50" />
            <div className="h-12 w-24 bg-background-900" />
          </div>
        </div>
      </section>
    </div>
  )
}

export { Root }
