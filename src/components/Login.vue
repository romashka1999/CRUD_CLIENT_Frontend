<template>
    <div class="container">   

          
                <div class="panel panel-info" >

                    <div class="panel-heading">
                        <router-link :to="{ path: '/forgotPassword'}" append>Forgot password?</router-link>
                    </div>     

                    <div style="padding-top:30px" class="card-body" >

                        <div v-if="statusCode !== 200">
                            <div class="alert col-sm-9" :class="statusCode === 400 ? 'alert-danger' : 'alert-warning'">
                                {{alertMessage}}
                            </div>
                        </div>
                            
                        <form id="loginform" class="form-horizontal" role="form">
                                    
                            <div class="form-group">
                                <label class="col-md-3 control-label">Email Or Username</label>
                                <div class="col-md-9">
                                    <input type="text" class="form-control" placeholder="Email Or Username" v-model="emailOrUsername"/>
                                </div>
                            </div>
                                
                            <div class="form-group">
                                <label class="col-md-3 control-label">Password</label>
                                <div class="col-md-9">
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
                console.log(response);
                localStorage.setItem('token', response.token);
                localStorage.setItem('refreshToken', response.refreshToken);
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