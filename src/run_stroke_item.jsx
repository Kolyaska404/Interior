export function Item({ img, price }) {
    return (
        <li className="overflow-hidden w-[388px] rounded-[25px] pb-[84px] shadow-lg">
            <img className="w-[387px]" src={img} alt="" />
            <div className="flex justify-between items-center px-[30px] pt-[28px]">
                <p className="text-[23px] whitespace-nowrap">Modern Picture</p>
                <img src="/shopping-cart.svg" alt="" />
            </div>
            <h3 className="text-[32px] px-[30px] mb-[24px]">{price}</h3>
            <ul className="flex gap-x-[8px] text-[#DCB47A] px-[30px]">
                <li className="px-[12px] py-[11px] bg-[#F6FFF6] border-[#DCB47A] border-[1px] rounded-full text-[23px] leading-[23px]">Label</li>
                <li className="px-[12px] py-[11px] bg-[#F6FFF6] border-[#DCB47A] border-[1px] rounded-full text-[23px] leading-[23px]">Label</li>
                <li className="px-[12px] py-[11px] bg-[#F6FFF6] border-[#DCB47A] border-[1px] rounded-full text-[23px] leading-[23px]">Label</li>
            </ul>
        </li>
    )
}