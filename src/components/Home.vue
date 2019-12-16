<template>
    <div class="container">
        <button class="btn btn-danger" @cliack="logout" >Log Out</button>
    </div>
</template>


<script>
export default {
    name: 'Home',
    data() {
        return {

        }
    },
    created() {
        if(localStorage.getItem('token') === null || localStorage.getItem('refreshToken') === null) {
            this.$router.push('/login');
        }
    },
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push('/login');
        }
    }
}
</script>