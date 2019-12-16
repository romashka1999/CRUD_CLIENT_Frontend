<template>
    <div class="container">    
        <div class="jumbotron">
            <div class="row">
                <div class="col-md-4 col-xs-12 col-sm-6 col-lg-4">
                    <img src="https://www.svgimages.com/svg-image/s5/man-passportsize-silhouette-icon-256x256.png" alt="stack photo" class="img">
                </div>
                <div class="col-md-8 col-xs-12 col-sm-6 col-lg-8">
                    <div class="container" style="border-bottom:1px solid black">
                        <h2>John Doe</h2>
                    </div>
                    <hr>
                    <ul class="container details">
                        <li><p><span class="glyphicon glyphicon-earphone one" style="width:50px;"></span>+91 90000 00000</p></li>
                        <li><p><span class="glyphicon glyphicon-envelope one" style="width:50px;"></span>somerandom@email.com</p></li>
                        <li><p><span class="glyphicon glyphicon-map-marker one" style="width:50px;"></span>Hyderabad</p></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    name: 'Home',
    data() {
        return {
            baseUrl: 'http://localhost:8000',
        }
    },
    async created() {
        if(localStorage.getItem('token') === null || localStorage.getItem('refreshToken') === null) {
            this.$router.push('/login');
        }

        const headers = { 
                "token": localStorage.getItem('token'),
                "refreshToken": localStorage.getItem('refreshToken')
        };

        const options = { headers: headers};

        try {
            const response = await axios.get(this.baseUrl + `/account/getUser`, options);
            console.log(response.data);
        } catch (err) {
            this.error = err.response.data;
            console.log(this.error);
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