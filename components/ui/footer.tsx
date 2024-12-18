import { Separator } from "./separator";


const dataFooter = [
    {
        id: 1,
        name:"Sobre nosotros",
        link: "/"
    },
    {
        id: 2,
        name:"Productos",
        link: "/"
    },
    {
        id: 3,
        name:"Mi cuenta",
        link: "/"
    },
    {
        id: 4,
        name:"Politica de privacidad",
        link: "/"
    }
]

const Footer = () => {
    return (
        <footer className="mt-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <p>
                        <span className="font-bold">
                            MikeDev
                        </span>
                        Ecommercer
                    </p>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        {dataFooter.map((data) =>(
                            <li key={data.id} className="mr-4">
                                <a href={data.link} className="hover:underline me-4 md:me-6">{data.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>

                <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
                    © 2021. 
                    <a href="#">MikeDev</a>
                    . All rights reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;