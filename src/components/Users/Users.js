import {TrashIcon} from "@heroicons/vue/outline"
import {RefreshIcon} from "@heroicons/vue/outline"

export default {
    name: 'users',
    components: {TrashIcon, RefreshIcon},
    props: [],
    data() {
        return {}
    },
    computed: {
        users() {
            return this.$store.getters.getUsers
        },

        error() {
            return this.$store.getters.getError
        }

    },
    mounted() {
        this.$store.dispatch("fetchUsers")
    },
    methods: {
        deleteUser: function (userid) {
            this.$store.commit('DELETE_USER', userid);
        }
    }

}


