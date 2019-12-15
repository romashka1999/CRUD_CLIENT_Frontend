<template>
    <div class="container">
        
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Login',
    data() {
        return {
            baseUrl: 'http://localhost:8000',
            emailOrUsername: '',
            password: ''
        }
    },
    methods: {
        loginUser() {
            const loginedUser = {
                emailOrUsername: this.emailOrUsername,
                password: this.password
            }

            try {
                const response = await axios.post(this.baseUrl + '/account/loginUser', loginedUser);
                console.log(response);
                localStorage.setItem('token', response.token);
                localStorage.setItem('refreshToken', response.refreshToken);
                this.$router.push('/');
            } catch (error) {
                console.log(error.response.data);
            }
        }
    }
}
</script>