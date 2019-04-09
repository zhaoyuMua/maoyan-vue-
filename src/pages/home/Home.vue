<template>
    <div>
        <commontHeader :title="'首页'" :back="false"/>
        <NavMenu :actived-index="activedMenuIndex" @change="activedActivedMenuIndex"/>
        <MovieContent :menu-index="activedMenuIndex" />
        <commontFooter />
    </div>
</template>

<script>
import commontHeader from '@/components/commont/commontHeader'
import NavMenu from '@/pages/home/components/NavMenu'
import MovieContent from '@/pages/home/components/MovieContent'
import commontFooter from '@/components/commont/commontFooter'
export default {
    name:"Home",
    data() {
        return {
            activedMenuIndex:0
        }
    },
    components:{
        commontHeader,
        NavMenu,
        MovieContent,
        commontFooter
    },
    methods: {
        activedActivedMenuIndex(index){
            this.activedMenuIndex=index
        }
    },
}
</script>