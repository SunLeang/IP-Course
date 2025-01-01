<template>
    <span>This is Section {{ curSec }} of Page {{ curPage }}</span>
</template>

<script>
import { useMessageStore } from '@/stores/Page';

export default {
    setup() {
        const store = useMessageStore()
        return {
            store,
        }
    },
    computed: {
        curPage() {
            return this.$route.params.pageNumber
        },
        curSec() {
            return this.$route.params.secNumber
        }
    },
    watch: {
        '$route.params.secNumber': {
            handler(newVal) {
                this.store.lastSec = newVal;
            },
            immediate: true,
        }
    }
}
</script>
