<template>
    <div class="container">
        
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Register',
    data() {
        return {
            baseUrl: 'http://localhost:8000',
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            repeatedPassword: ''
        }
    },
    created() {

    },
    methods: {
        async registerUser() {
            if(this.password !== this.repeatedPassword) {
                return;
            }

            const newUser = {
                firstName: this.firstName,
                lastName: this.lastName,
                username: this.username,
                email: this.email,
                password: this.password
            }

            try {
                const response = await axios.post(this.baseUrl + '/account/createUser', newUser);
                console.log(response);
                this.$router.push('/login');
            } catch (error) {
                console.log(error.response.data);
            }
        }
    }
}
</script>