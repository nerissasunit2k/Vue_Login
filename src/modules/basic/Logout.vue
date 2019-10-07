<template>
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Are you sure you want to logout?</h4>
      </div>
      <div class="modal-body">
        <button
          type="button"
          class="btn btn-default"
          id=" btn"
          data-dismiss="modal"
          @click="logout"
        >Yes</button>
      </div>
    </div>
  </div>
</template>

<script>
import AUTH from "services/auth";
export default {
  methods: {
    logout(e) {
      e.preventDefault();
      AUTH.logout();
    }
  }
};
</script>

<style scoped>
.modal-content {
  text-align: center;
  background-color: cornflowerblue;
}
#btn {
  background-color: beige;
}
</style>