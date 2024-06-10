<template>
     <div class="tags">
            <p class="tags__title">Тэги</p>
                <div class="tags__buttons">
                <button @click="$emit('ontags', tag.tagName), buttonFormatter(index)" v-for="(tag, index) in tags" :key="tag.id" class="tags__button" :class="[isActive && currentIndex === index ? 'tags__button_active' : '']">{{ tag.tagName }}</button>
                </div>
            </div>
</template>
<script>
export default {
    name: 'tags',
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
        emits: ["ontags"],
        methods: {
            buttonFormatter(index) {
                this.currentIndex = index,
                    this.isActive = true;
            }
        }
}
</script>
<style lang="sass">
    
</style>