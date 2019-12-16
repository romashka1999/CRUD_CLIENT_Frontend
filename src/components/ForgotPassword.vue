<template>
    <div class="container">
        ForgotPassword
    </div>
</template>


<script>
export default {
    name: 'ForgotPassword',
    data() {
        return {

        }
    },
    created() {
        if(localStorage.getItem('token') && localStorage.getItem('refreshToken')) {
            this.$router.push('/home');
        }
    },
    methods: {
        
    }
}
</script>