<template>
  <div>
    <div class="jumbotron">
      <h1>Subjects</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <center>
            <b-card id="card">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">SUBJECT</th>
                    <th scope="col">TEACHER</th>
                    <th scope="col">TIME </th>
                    <th scope="col">DAY</th>
                    <th scope="col">VENUE</th>
                  </tr>
                </thead>
                <tbody>
                  <ul>
                    <li> {{subject}}</li>
                    <li> {{techer}}</li>
                    <li> {{time}}</li>
                    <li> {{subject}}</li>
                    <li> {{day}}</li>
                    <li> {{venue}}</li>
                    <!-- <li v-for="list">{{ content.subject}}</li> -->
                  </ul>
                  <hr>
                </tbody>
              </table>
            </b-card>
          </center>
        </div>
        <div class="col">
          <b-card id="card1">
            <b-form-group >
              <label id="Subject">Subject:</label>
              <b-form-input v-model="content.subject" size="sm"></b-form-input>
              <label id="teacher">Teacher:</label>
              <b-form-input v-model="content.teacher" size="sm"></b-form-input>
              <label id="time">Time:</label>
              <b-form-input v-model="content.time" size="sm"></b-form-input>
              <label id="time">Day:</label>
              <b-form-input v-model="content.day" size="sm"></b-form-input>
              <label id="venue">Venue:</label>
              <b-form-input v-model="content.venue" size="sm"></b-form-input>
              <br>
              <center>
                <b-button variant="primary" @click="submit">Add Subject</b-button>
              </center>
            </b-form-group>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
/* #card {
  margin-top: 20px;
} */
.jumbotron {
  padding: 20px;
  text-align: center;
}
#card {
  width: 400px;
}
#card1 {
  width: 400px;
}
</style>

<script>
export default {
  data(){
    return {
      content: {
        subject: "",
        teacher: "",
        time: "",
        day: "",
        venue: ""
      }
    };
  },
  methods: {
    submit: function(e) {
      e.preventDefault();
      sessionStorage.getItem("Subject", this.content.subject),
        sessionStorage.getItem("Teacher", this.content.teacher),
        sessionStorage.getItem("Time", this.content.time),
        sessionStorage.getItem("Day", this.content.day),
        sessionStorage.getItem("Venue", this.content.venue);
    }
  }
};
</script>