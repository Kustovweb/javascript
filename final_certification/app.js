Vue.createApp({

    data() {
        return {
            tagName: "",
            blog: [
                {
                    id: 1,
                    img: "assets/img/blog1.png",
                    imgAlt: "blogImg",
                    title: "Создадим лучший макет перепланировки",
                    tag: "Планировка",
                    date: "26 Декабрь,2022 ",
                    article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad atque blanditiis placeat in ipsa ratione. Ut possimus aut delectus, maiores recusandae quisquam error voluptatum molestiae repudiandae eaque, tempore rem neque?"

                },
                {
                    id: 2,
                    img: "assets/img/blog2.png",
                    imgAlt: "blogImg",
                    title: "Лучшие интерьерные идеи по низкой цене",
                    tag: "Архитектура",
                    date: "22 декабрь,2022",
                    article: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, est! In nihil ullam veniam est enim repellendus quaerat ut quas alias, sed expedita a vero quam beatae vel consequuntur iusto?"

                },
                {
                    id: 3,
                    img: "assets/img/blog3.png",
                    imgAlt: "blogImg",
                    title: "Лучшие интерьерные решения для офисов",
                    tag: "Планировка",
                    date: "25 Декабрь,2022",
                    article: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita architecto ducimus eius, corporis laboriosam nesciunt perspiciatis nostrum velit est magni animi nobis omnis exercitationem odit suscipit. Architecto porro debitis quam."

                },
                {
                    id: 4,
                    img: "assets/img/blog4.png",
                    imgAlt: "blogImg",
                    title: "Создадим лучший макет перепланировки",
                    tag: "Кухня",
                    date: "26 Декабрь,2023",
                    article: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, error? Quasi recusandae magni deleniti, expedita repellendus illum nulla doloremque aperiam neque! Optio libero eum et eligendi natus quod rem distinctio!"

                },
                {
                    id: 5,
                    img: "assets/img/blog5.png",
                    imgAlt: "blogImg",
                    title: "Лучшие интерьерные идеи по низкой цене",
                    tag: "Зал",
                    date: "22 Декабрь,2022",
                    article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam blanditiis consequuntur ad hic unde obcaecati doloribus cum, soluta quaerat dolorum in culpa saepe recusandae nam modi sint magnam similique eaque!"

                },
                {
                    id: 6,
                    img: "assets/img/blog6.png",
                    imgAlt: "blogImg",
                    title: "Лучшие интерьерные решения для офисов",
                    tag: "Здание",
                    date: "25 Декабрь,2022",
                    article: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure quas aliquid expedita rerum ullam eos numquam necessitatibus vero sed excepturi nisi fugiat explicabo voluptatem, quos corrupti alias labore nobis? Tempora!"

                },
                {
                    id: 7,
                    img: "assets/img/blog6.png",
                    imgAlt: "blogImg",
                    title: "Лучшие интерьерные решения для спален",
                    tag: "Спальня",
                    date: "25 Декабрь,2022",
                    article: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi officiis maiores, rem rerum porro quae beatae eaque nostrum sed excepturi cumque aut. Voluptatibus amet officiis repellendus quae ipsum esse!"

                }


            ],

        }
    },
    methods: {
        filteredArticles(tagName) {
            if (tagName) {
                this.tagName = tagName;
            }
        }
    },
    computed: {
        filter() {
            if (this.tagName) {
                return this.blog.filter(item => item.tag === this.tagName);
            } else {
                return this.blog
            }
        }
    }
})


    .component('header-temp', {
        data() {
            return {
                headerLinks: [
                    {
                        href: "#",
                        classItem: "header__menu__item",
                        name: "Домой"

                    },
                    {
                        href: "#",
                        classItem: "header__menu__item",
                        name: "Проект"

                    },
                    {
                        href: "#",
                        classItem: "header__menu__item",
                        name: "Блог"

                    }
                ]
            }
        },
        template: `
        <header class="header center">
        <div class="header__left">
            <a class="logo" href="#"><img src="assets/img/logo.svg" alt="" width="34"
                    height="34"><span>Interno</span></a>
        </div>
        <div class="header__right">
            <ul class="header__menu">
                <li v-for="link in headerLinks" :key="link" :class="link.classItem"><a :href="link.href">{{ link.name }}</a></li>
            </ul>
        </div>
    </header>
        `
    })
    .component('tags', {
        data() {
            return {
                isActive: false,
                currentIndex: false,
                tags: [
                    {
                        id: 1,
                        tagName: "Кухня",
                    },
                    {
                        id: 2,
                        tagName: "Спальня",
                    },
                    {
                        id: 3,
                        tagName: "Здание",
                    },
                    {
                        id: 4,
                        tagName: "Архитектура",
                    },
                    {
                        id: 5,
                        tagName: "Планировка",
                    },
                    {
                        id: 6,
                        tagName: "Зал",
                    },
                ]
            }
        },
        template: `
            <div class="tags">
            <p class="tags__title">Тэги</p>
                <div class="tags__buttons">
                <button @click="$emit('ontags', tag.tagName), buttonFormatter(index)" v-for="(tag, index) in tags" :key="tag.id" class="tags__button" :class="[isActive && currentIndex === index ? 'tags__button_active' : '']">{{ tag.tagName }}</button>
                </div>
            </div>
        `,
        emits: ["ontags"],
        methods: {
            buttonFormatter(index) {
                this.currentIndex = index,
                    this.isActive = true;
            }
        }

    })
    .component('footer-temp', {
        template: `
        <footer class="footer center">
        <div class="footer__interno">
            <div class="footer__logo">
                <a class="logo" href="#"><img src="assets/img/logo.svg" alt="" width="34"
                        height="34"><span>Interno</span></a>
            </div>
            <div class="footer__socials">
                <a href="#" class="footer__icon__twitter"><svg width="19" height="16" viewBox="0 0 19 16"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.6367 4.59375C17.3398 4.06641 17.9727 3.43359 18.4648 2.69531C17.832 2.97656 17.0938 3.1875 16.3555 3.25781C17.1289 2.80078 17.6914 2.09766 17.9727 1.21875C17.2695 1.64062 16.4609 1.95703 15.6523 2.13281C14.9492 1.39453 14 0.972656 12.9453 0.972656C10.9062 0.972656 9.25391 2.625 9.25391 4.66406C9.25391 4.94531 9.28906 5.22656 9.35938 5.50781C6.30078 5.33203 3.55859 3.85547 1.73047 1.64062C1.41406 2.16797 1.23828 2.80078 1.23828 3.50391C1.23828 4.76953 1.87109 5.89453 2.89062 6.5625C2.29297 6.52734 1.69531 6.38672 1.20312 6.10547V6.14062C1.20312 7.93359 2.46875 9.41016 4.15625 9.76172C3.875 9.83203 3.52344 9.90234 3.20703 9.90234C2.96094 9.90234 2.75 9.86719 2.50391 9.83203C2.96094 11.3086 4.33203 12.3633 5.94922 12.3984C4.68359 13.3828 3.10156 13.9805 1.37891 13.9805C1.0625 13.9805 0.78125 13.9453 0.5 13.9102C2.11719 14.9648 4.05078 15.5625 6.16016 15.5625C12.9453 15.5625 16.6367 9.97266 16.6367 5.08594C16.6367 4.91016 16.6367 4.76953 16.6367 4.59375Z"
                            fill="#292F36" />
                    </svg>
                </a>
                <a href="#" class="footer__icon__linkedin">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.14062 16H0.871094V5.48828H4.14062V16ZM2.48828 4.08203C1.46875 4.08203 0.625 3.20312 0.625 2.14844C0.625 1.12891 1.46875 0.285156 2.48828 0.285156C3.54297 0.285156 4.38672 1.12891 4.38672 2.14844C4.38672 3.20312 3.54297 4.08203 2.48828 4.08203ZM16.3398 16H13.1055V10.9023C13.1055 9.67188 13.0703 8.125 11.3828 8.125C9.69531 8.125 9.44922 9.42578 9.44922 10.7969V16H6.17969V5.48828H9.30859V6.92969H9.34375C9.80078 6.12109 10.8555 5.24219 12.4375 5.24219C15.7422 5.24219 16.375 7.42188 16.375 10.2344V16H16.3398Z"
                            fill="#292F36" />
                    </svg>

                </a>
            </div>
        </div>
        <div class="footer__pages">
            <p class="footer__pages__title">Страницы</p>
            <ul class="footer__pages__items">
                <li class="footer__pages__item"><a href="#">Домой</a></li>
                <li class="footer__pages__item"><a href="#">Проект</a></li>
                <li class="footer__pages__item"><a href="#">Блог</a></li>
            </ul>
        </div>
        <div class="footer__contact">
            <p class="footer__contact__title">Контакты</p>
            <address class="footer__contact__address">
                <span>55 East Birchwood Ave.<br>Brooklyn, New York 11201</span><br>
                <span class="footer__contact__item"> <a
                        href="mailto:contact@interno.com">contact@interno.com</a></span><br>
                <span class="footer__contact__item"><a href="tel:(123) 456 - 7890">(123) 456 - 7890</a></span>
            </address>

        </div>
    </footer>
        `
    })


    .mount('#app')