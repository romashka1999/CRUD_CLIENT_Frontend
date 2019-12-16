<template>
   <div class="container">

        <div class="card-body" >
            <form >
                
                <div id="register-alert" class="alert alert-danger col-sm-9"></div>
                <router-link :to="{ path: '/login'}" append>Login here</router-link>
                    

                <div class="form-group">
                    <label for="email" class="col-md-3 control-label">Email</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control" name="email" placeholder="Email Address">
                    </div>
                </div>
                    
                <div class="form-group">
                    <label for="firstname" class="col-md-3 control-label">First Name</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control" name="firstname" placeholder="First Name">
                    </div>
                </div>

                <div class="form-group">
                    <label for="lastname" class="col-md-3 control-label">Last Name</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control" name="lastname" placeholder="Last Name">
                    </div>
                </div>

                <div class="form-group">
                    <label for="password" class="col-md-3 control-label">Password</label>
                    <div class="col-md-9">
                        <input type="password" class="form-control" name="passwd" placeholder="Password">
                    </div>
                </div>
                    
                <div class="form-group">
                    <label for="icode" class="col-md-3 control-label">Invitation Code</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control" name="icode" placeholder="">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-md-offset-3 col-md-9">
                        <button id="btn-signup" type="button" class="btn btn-info"><i class="icon-hand-right"></i>Register</button>
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