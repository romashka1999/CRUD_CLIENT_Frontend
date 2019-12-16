<template>
    <div class="container">   

            <div id="loginbox" style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">    
                <div class="panel panel-info" >

                    <div class="panel-heading">
                        <router-link :to="{ path: '/forgotPassword'}" append>Forgot password?</router-link>
                    </div>     

                    <div style="padding-top:30px" class="card-body" >

                        <div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>
                            
                        <form id="loginform" class="form-horizontal" role="form">
                                    
                            <div class="form-group">
                                <label for="email" class="col-md-3 control-label">Email</label>
                                <div class="col-md-9">
                                    <input type="text" class="form-control" name="email" placeholder="Email Address">
                                </div>
                            </div>
                                
                            <div class="form-group">
                                <label for="email" class="col-md-3 control-label">Email</label>
                                <div class="col-md-9">
                                    <input type="text" class="form-control" name="email" placeholder="Email Address">
                                </div>
                            </div>


                            <div  class="form-group">
                                <div class="col-sm-12 controls">
                                    <button id="btn-login" type="button" class="btn btn-success">Login </button>
                                </div>
                            </div>


                            <div class="form-group">
                                <div class="col-md-12 control">
                                    <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%" >
                                        Don't have an account! 
                                        <router-link :to="{ path: '/register'}" append>Sign Up Here</router-link>
                                    </div>
                                </div>
                            </div>    
                        </form>     

                    </div>                     
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
            password: ''
        }
    },
    methods: {
        async loginUser() {
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