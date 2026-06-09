import { BoxProps } from "@/app/models/box";
import Image from "next/image";
import { Button } from "./button";

export default function Box({ image,
  title,
  subtitle,
  description,
  buttonText,
  onButtonClick,
  className,
  children }: BoxProps) {

  return (
    <div
      className={`
        relative
        rounded-[30px]
        bg-[linear-gradient(to_bottom,#F2E3E1_0%,#DBC2BD_100%)]
        md:p-6 p-4
        flex flex-col md:flex-col
        md:items-center
        md:text-center
        text-left
        my-3
        ${className || ""}
      `}
    >

      {/* MOBILE LAYOUT */}
      <div className="flex md:hidden flex-row items-start gap-4">
        <Image
          src={image}
          alt={title}
          width={80}
          height={80}
          className="object-contain w-20 h-20 shrink-0"
        />
        <div className="flex flex-col flex-1">
          <h3 className="font-semibold text-expresso">{title}</h3>
          <p className="text-liver-brown text-sm">{subtitle}</p>
          {buttonText && (
            <div className="mt-4 flex justify-center -ml-12">
              <Button onClick={onButtonClick} text={buttonText} />
            </div>
          )}
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden md:flex flex-col items-center text-center">

        {/* ICON */}
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="mb-4 object-contain opacity-70"
        />

        {/* TITLE */}
        <h2 className="font-[500] mt-2 text-expresso">{title}</h2>

        {/* SUBTITLE */}
        <h3 className="font-[400] text-liver-brown mt-2 ">{subtitle}</h3>

        {/* DESCRIPTION (only desktop) */}
        {description && (
          <p className="font-[300] text-liver-brown mt-3 hidden md:block">
            {description}
          </p>
        )}

        {children}
      </div>

      {/* DESKTOP BUTTON*/}
      {buttonText && (
        <div className="hidden md:flex mt-10 min-h-20 justify-center">
          <Button onClick={onButtonClick} text={buttonText} className=" absolute bottom-10"/>
        </div>
      )}
    </div>
  );
}
