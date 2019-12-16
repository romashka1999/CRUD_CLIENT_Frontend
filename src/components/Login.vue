<template>
    <div class="container">   
        <div class="card-body" >
            <div v-if="statusCode !== 200" class="col-md-12">
                <div class="alert" :class="statusCode === 400 ? 'alert-danger' : 'alert-warning'">
                    {{alertMessage}}
                </div>
            </div>

            <div class="col-md-12">
                <router-link :to="{ path: '/forgotPassword'}" append>Forgot password?</router-link>
            </div>   
                
            <form>         
                <div class="form-group">
                    <label class="col-md-3 control-label">Email Or Username</label>
                    <div class="col-md-12">
                        <input type="text" class="form-control" placeholder="Email Or Username" v-model="emailOrUsername"/>
                    </div>
                </div>
                    
                <div class="form-group">
                    <label class="col-md-3 control-label">Password</label>
                    <div class="col-md-12">
                        <input type="password" class="form-control" placeholder="Password" v-model="password"/>
                    </div>
                </div>


                <div  class="form-group">
                    <div class="col-sm-12 controls">
                        <button type="button" class="btn btn-success" @click="loginUser">Login </button>
                    </div>
                </div>


                <div class="form-group">
                    <div class="col-md-12 control">
                        <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%" >
                            Don't have an account! 
                            <router-link :to="{ path: '/register'}" append>Register Here</router-link>
                        </div>
                    </div>
                </div>    
            </form>      
        </div>  
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
            password: '',
            statusCode: 200,
            alertMessage: ''
        }
    },
    methods: {
        async loginUser() {

            if(!this.validateLoginForm()) {
                return 
            }
            const loginedUser = {
                emailOrUsername: this.emailOrUsername,
                password: this.password
            }

            try {
                const response = await axios.post(this.baseUrl + '/account/loginUser', loginedUser);
                console.log(response.data);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('refreshToken', response.data.refreshToken);
                this.$router.push('/');
            } catch (error) {
                console.log(error.response.data);
                this.alertM(400, error.response.data.message);
            }
        },
        validateLoginForm() {
            if(this.emailOrUsername === '' || this.password === '') {
                    this.alertM(300, 'please fill all input value');
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