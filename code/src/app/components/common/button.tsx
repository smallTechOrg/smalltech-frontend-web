interface ButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
}

export function Button({ text, onClick, className }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`
        w-[160px] h-[48px]
    sm:w-[180px] sm:h-[52px]
    md:w-[200px] md:h-[56px]
    lg:w-[213px] lg:h-[62px]
        rounded-[6px] 
        bg-gold
       
        
        hover:bg-gold-60 transition-colors
        cursor-pointer
        ${className || ""}
      `}
        >
            <p className="font-[600] text-ink">    {text}</p>
        

        </button>
    );
}
