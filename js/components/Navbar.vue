<script>
    export default {
        mounted() {
            // 
        },

        data() {
            return {
                navIsActive: false
            }
        },

        methods: {
            toggleNav(){
               !this.navIsActive ? this.navIsActive = true : this.navIsActive = false;
            }
        }
    }
</script>
