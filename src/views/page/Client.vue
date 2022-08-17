<template>
  <div>

    <base-header class="pb-6">
      <b-row align-v="center" class="py-4">
        <b-col lg="6" cols="7">

          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-bread-crumb></route-bread-crumb>
          </nav>
        </b-col>

      </b-row>
      <sidebar-item
                  :link="{
                    name: 'Ajoutet un Prospect',
                    path: '/addclient',

                    icon: 'ni ni-fat-add text-black'
                  }">
        </sidebar-item>
          <sidebar-item variant="success"
                  :link="{
                    name: 'All Prospects ',
                    path: '/clients',
                    icon: 'ni ni-check-bold text-black',



                  }">
        </sidebar-item>
         <sidebar-item
                  :link="{
                    name: 'Prospect Opt-in ',
                    path: '/clientIn',
                    icon: 'ni ni-check-bold text-black'


                  }">
        </sidebar-item>
        <sidebar-item
                  :link="{
                    name: 'Prospect Opt-out ',
                    path: '/clientOut',
                    icon: 'ni ni-check-bold text-black'


                  }">
        </sidebar-item>








    </base-header>
     <vue-good-table
      :columns="columns"
      :rows="rows"
      :line-numbers="true"/>
    <b-container fluid class="mt--6">
      <b-row class="starter-page">
        Sample page
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import RouteBreadCrumb from '@/components/Breadcrumb/RouteBreadcrumb';
  import StatsCard from '@/components/Cards/StatsCard';
  import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';

  export default {
    name: 'starter-page',
    components: {
      VueGoodTable,
      StatsCard,
      RouteBreadCrumb
    },
    data() {
      return {
        columns: [

        {
          label: 'Nom',
          field: 'nom',
        },
        {
          label: 'Prenom',
          field: 'prenom',
        },
        {
          label: 'cin',
          field: 'cin',
          type: 'number',
        },
        {
          label: 'Email',
          field: 'email',
          type: 'email'
        },
        {
          label: 'Tel',
          field: 'tel',
          type: 'number',
        },
        {
          label: 'Date',
          field: 'date_naiss',
          type: 'date',
          dateInputFormat: 'yyyy/MM/dd',
          dateOutputFormat: 'MMM do yy',
        },
        {
          label: 'Statut',
          field: 'statut',
        },
        {
         label: 'Action',
         field: 'btn',
         html: true,
       },

      ],
      rows: [
      ]
      };
    },
     mounted() {
    this.getdata();
  },
     methods: {
    getdata() {
      this.$axios.get("/ListClient").then((response) => {
        console.log(response.data);
        this.rows = response.data;
        this.rows.map(elem => elem.btn = '<a href="#/Updateclient" class="ni ni-settings"></a>  <button class="ni ni-fat-remove"></button> ')
      });

    },

  },
  };
</script>
<style>
  .starter-page {
    min-height: calc(100vh - 380px);
  }
</style>
