
<template>

  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <b-container class="container">
        <div class="header-body text-center mb-7">
          <img :src="welcom" class="image"  >
        </div>

      </b-container>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
             xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <b-container class="mt--8 pb-5">
      <!-- Table -->
      <b-row class="justify-content-center">
        <b-col lg="6" md="8" >
          <b-card no-body class="bg-secondary border-0">

            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <small>Ajouter un prospect</small>
              </div>
              <!--<validation-observer v-slot="{handleSubmit}" ref="formValidator">-->
                <b-form role="form" @submit.prevent="onSubmit()">


                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-hat-3"
                              placeholder="nom"
                              v-validate="'required'"
                              name="nom"

                              v-model="model.nom">
                  </base-input>
                   <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-hat-3"
                              placeholder="prenom"
                              v-validate="'required'"
                              name="prenom"

                              v-model="model.prenom">
                  </base-input>
                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-single-copy-04"
                              placeholder="cin"
                              v-validate="'required'"
                              name="cin"

                              v-model="model.cin">
                  </base-input>


                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-email-83"
                              placeholder="Email"
                              v-validate="'required'"
                              name="Email"

                              v-model="model.email">
                  </base-input>


                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-mobile-button"
                              placeholder="tel"
                              v-validate="'required'"
                              name="tel"

                              v-model="model.tel">
                  </base-input>
                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-calendar-grid-58"
                              placeholder="date_naiss"

                               v-validate="'required'"
                              name="date_naiss"

                              v-model="model.date_naiss">
                  </base-input>
                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-hat-3"
                              placeholder="in/out"
                              v-validate="'required'"
                              name="Statut"

                              v-model="model.statut">
                  </base-input>


                  <div class="text-center">
                    <b-button type="submit" variant="primary" class="mt-4">Ajouter</b-button>
                  </div>
                </b-form>
              <!--</validation-observer>-->
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>



  export default {
    name: 'register',
    data() {
      return {
        model: {
          nom: '',
          prenom: '',

          cin: '',

          email: '',

          tel: '',

          date_naiss: '',

          statut: ''
        }
      }
    },
    props:{
      welcom: {
        type: String,
        default: 'img/brand/welcom.jpg'

      },
    },
    methods: {
      onSubmit() {


                let currentObj = this;

                this.axios.post('/addclient', {

                    nom: this.nom,

                    prenom: this.prenom,

                    cin: this.cin,

                    email: this.email,

                    tel: this.tel,

                    date_naiss: this.date_naiss,

                    statut: this.statut

                })

                .then(function (response) {

                    currentObj.output = response.data;

                })

                .catch(function (error) {

                    currentObj.output = error;

                });
      }
    }

  };
</script>
<style></style>
