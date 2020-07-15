<template>
    <div class="download-sorted-excel">
        <download-excel
            :data   = users
            :fields = "json_fields"
            name    = "queries_meddy.xls">
    	    <b-button variant="success">Descargar</b-button>
        </download-excel>
    </div>
</template>

<script>
import { usersRef } from '../firebase';

export default {
  props : ['sortBy', 'sortName', 'nameList', 'startTime', 'endTime'],
  data() {
    return {
      users: [],
      json_fields: {
	'No. sesión': 'SessionId',
	'Nombre de usuario': 'Name',
	'Fecha': 'Date',
	'Hora': 'Hour',
	'No. interacción': 'index',
        'Escrito usuario': 'TextQuery',
        'Escrito agente': 'IntentName',
        'Certidumbre': 'Confidence'
      },
    };
  },
//  methods : {
//    fetchData: function () {
//      return this.users
//    }
//  },
//  firebase() {
//      console.log("sortBy: " + this.sortBy)
//      if (!this.sortBy) {
//        console.log('no sort');
//        return { usersRef }
//      } else {
//        var users = usersRef.orderByChild(this.sortBy);
//        if (this.sortBy == 'Time') {
//          // es un query, entonces se necesita usar el ref para accesar los datos
//          users = users.startAt(this.startTime).endAt(this.endTime).ref;
//          return {
//            users: users,
//          }
//        } else if (this.sortBy == 'Name') {
//          return {
//            users: users.equalTo(this.nameList),
//          }
//        } else {
//          return {
//            users: users,
//          }
//        }
//      }
//  },
  watch: {
    sortBy: {
      immediate: true,
      handler(sortBy) {
        if (!sortBy) {
          console.log('no sort');
          this.users = usersRef;
        } else {
          var users = usersRef.orderByChild(sortBy);
          if (sortBy == 'Time') {
            // es un query, entonces se necesita usar el ref para accesar los datos
            this.$rtdbBind('users', users.startAt(this.startTime).endAt(this.endTime).ref)
          } else if (sortBy == 'Name') {
            this.$rtdbBind('users', users.equalTo(this.nameList))
          }
        }
	console.log(usersRef.orderByChild('Time').ref);
      }
    }
  }
};

</script>

<style scoped>  /* "scoped" attribute limit the CSS to this component only */
  .download-excel {
    margin-top: 30px;
  }
</style>
