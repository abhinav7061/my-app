import Image from 'next/image';
import React from 'react'

const Template = ({
    title,
    form: Form,
    imageSrc = "http://res.cloudinary.com/djyzgjojr/image/upload/c_auto,f_auto,g_auto,h_500,q_auto,w_500/v1727554679/Polling/profile_images/65465220b4b8929cb532e583_lxum6b"
}: {
    title?: string,
    form: React.ReactNode,
    imageSrc?: string
}) => {
    return (
        <div className="w-full border overflow-hidden relative h-full  rounded-2xl p-10 text-white bg-black-100 flex items-center justify-center flex-col-reverse md:flex-row">
            <div className="flex-grow">
                <p className='font-bold text-4xl underline text-center'>{title}</p>
                {Form}
            </div>
            <Image
                src={imageSrc}
                alt="dummy image"
                width="1000"
                height="1000"
                className="object-cover h-[60%] md:h-[70%] aspect-[3/5] w-auto rounded-xl hidden md:block"
            />
        </div>
    )
}

export default Template
