<template>
   <div class="container">

        <div class="card-body" >
            <form >
                
                <div v-if="statusCode !== 200" class="col-md-12">
                    <div class="alert" :class="statusCode === 400 ? 'alert-danger' : 'alert-warning'">
                        {{alertMessage}}
                    </div>
                </div>

                <div class="col-md-12">
                    <router-link :to="{ path: '/login'}" append>Login here</router-link>
                </div>
                    
                    
                <div class="form-group">
                    <label class="col-md-3 control-label">First Name</label>
                    <div class="col-md-12">
                        <input type="text" class="form-control" placeholder="First Name" v-model="firstName"/>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-md-3 control-label">Last Name</label>
                    <div class="col-md-12">
                        <input type="text" class="form-control" placeholder="Last Name" v-model="lastName"/>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-md-3 control-label">Username</label>
                    <div class="col-md-12">
                        <input type="text" class="form-control" placeholder="Username" v-model="username"/>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-md-3 control-label">Email</label>
                    <div class="col-md-12">
                        <input type="email" class="form-control" placeholder="Email Address" v-model="email"/>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-md-3 control-label">Password</label>
                    <div class="col-md-12">
                        <input type="password" class="form-control"  placeholder="Password" v-model="password"/>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-md-3 control-label">Password Repeat</label>
                    <div class="col-md-12">
                        <input type="password" class="form-control"  placeholder="Password Repeat" v-model="repeatedPassword"/>
                    </div>
                </div>
                    

                <div class="form-group">
                    <div class="col-md-offset-3 col-md-12">
                        <button type="button" class="btn btn-info" @click="registerUser">Register</button>
                    </div>
                </div>

            </form>
        </div>

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
            repeatedPassword: '',
            statusCode: 200,
            alertMessage: ''
        }
    },
    created() {

    },
    methods: {
        async registerUser() {
            
            if(!this.validateRegisterForm()) {
                return 
            }

            const newUser = {
                firstName: this.firstName,
                lastName: this.lastName,
                username: this.username,
                email: this.email,
                password: this.password
            }

            console.log(newUser);

            try {
                const response = await axios.post(this.baseUrl + '/account/createUser', newUser);
                console.log(response);
                this.$router.push('/login');
            } catch (error) {
                console.log(error.response.data);
                this.alertM(400, error.response.data.message);
            }
        },
        validateRegisterForm() {
            if(this.firstName === '' || this.lastName === '' || this.username === '' ||
                this.email === '' || this.password === '' || this.repeatedPassword === '') {
                    this.alertM(300, 'please fill all input value');
                    return false
            }

            if(this.password !== this.repeatedPassword) {
                this.alertM(300, 'password does not match');
                return false;
            }
            return true;
        },
        alertM(statusCode, alertMessage) {
            this.statusCode = statusCode;
            this.alertMessage = alertMessage;

            setTimeout( function () {
                this.statusCode = 200;
                this.alertMessage = '';
            }.bind(this), 4000);
        }
    }
}


</script>