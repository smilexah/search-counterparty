import Image from "next/image";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#232323] text-white text-sm">
            <div className="px-[108px] py-16">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
                    <div className="space-y-2 col-span-1">
                        <Image src="/icons/footer-logo.svg" width={120} height={32} className="h-auto w-auto" alt="DataFy Logo" />
                        <p className="text-[14px] opacity-50">Современная платформа для проверки контрагентов с подборкой информации
                            и аналитики.</p>
                    </div>

                    <div>
                        <h2 className="font-bold text-xl mb-[21px]">Продукты</h2>
                        <ul className="space-y-4 text-[14px]">
                            <li><a href="#" className="hover:underline">Проверка контрагентов</a></li>
                            <li><a href="#" className="hover:underline">Выгрузка данных</a></li>
                            <li><a href="#" className="hover:underline">Массовая проверка</a></li>
                            <li><a href="#" className="hover:underline">Зарубежные контрагенты</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-bold text-xl mb-[21px]">Компания</h2>
                        <ul className="space-y-4 text-[14px]">
                            <li><a href="#" className="hover:underline">О нас</a></li>
                            <li><a href="#" className="hover:underline">Карьера</a></li>
                            <li><a href="#" className="hover:underline">Блог</a></li>
                            <li><a href="#" className="hover:underline">Пресса</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-bold text-xl mb-[21px]">Правовая информация</h2>
                        <ul className="space-y-4 text-[14px]">
                            <li><a href="#" className="hover:underline">Условия использования</a></li>
                            <li><a href="#" className="hover:underline">Политика конфиденциальности</a></li>
                            <li><a href="#" className="hover:underline">Политика использования файлов cookie</a></li>
                            <li><a href="#" className="hover:underline">Безопасность</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-bold text-xl mb-6">Контакты</h2>
                        <ul className="space-y-[26px] text-[16px]">
                            <li className="flex items-center space-x-2">
                                <Image src="/icons/email.svg" width={20} height={20} alt="Email" />
                                <a href="mailto:info@datafy.kz">info@datafy.kz</a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Image src="/icons/phone-call.svg" width={20} height={20} alt="Phone" />
                                <a href="tel:+77777777777">+7 (777) 777-77-77</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="border-gray-700 my-6"/>

                <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <span className="text-[14px] opacity-50">© {currentYear}. Все права защищены.</span>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#">
                            <Image src={"/icons/linkedin.svg"} width={25} height={25} alt={"LinkedIn"}/>
                        </a>
                        <a href="#">
                            <Image src={"/icons/facebook.svg"} width={25} height={25} alt={"Facebook"}/>
                        </a>
                        <a href="#">
                            <Image src={"/icons/twitter.svg"} width={25} height={25} alt={"Twitter"}/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;