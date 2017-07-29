<template>
<div class="row">
    <div class="col-sm-12">
        <div class="panel panel-default">
            <div class="panel-heading">Example Component</div>

            <div v-if="myVar" class="panel-body">
                I'm an example vue-component!
            </div>
            <div v-else class="panel-body">
                {{msg}}
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        mounted() {
            this.myExample();
            console.log('Component mounted.')
        },

        data: function(){
            return {
                myVar: false,
                msg: 'This is an error!'
            }
        },

        methods: {
            myExample(){
               this.myVar = true; 
            }
        }
    }
</script>