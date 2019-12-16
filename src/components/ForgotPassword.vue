<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div>
                    <router-link :to="{ path: '/login'}" append>Login Here</router-link>
                </div>
                <div>
                    <router-link :to="{ path: '/register'}" append>Register Here</router-link>
                </div>
                
                <div class="text-center">
                    <h2 class="text-center">Forgot Password?</h2>
                    <p>You can reset your password here.</p>
                    <div>

                    <form id="register-form" role="form" autocomplete="off" class="form" method="post">
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                                <input id="email" name="email" placeholder="email address" class="form-control"  type="email">
                            </div>
                        </div>

                        <div class="form-group">
                            <button type="button" class="btn btn-lg btn-primary btn-block" @click="ForgotPassword">Reset Password</button>
                        </div>
                    
                        <input type="text" class="hide" name="token" id="token" value=""> 
                    </form>

                    </div>
                </div>
            </div>
        </div>
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
        ForgotPassword() {
            console.log('object');
        }
    }
}
</script>