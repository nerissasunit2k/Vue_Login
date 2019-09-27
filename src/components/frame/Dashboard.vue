<template>
  <div class="container-fluid">
    <div class="col col-md-3">
      <div class="panel-group" id="accordion">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Files</a>
            </h4>
          </div>
          <div id="collapse1" class="panel-collapse collapse in">
            <ul class="list-group">
              <li class="list-group-item">
                <span class="badge">253</span> New
              </li>
              <li class="list-group-item">
                <span class="badge">17</span> Deleted
              </li>
              <li class="list-group-item">
                <span class="badge">3</span> Reported
              </li>
            </ul>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Blog</a>
            </h4>
          </div>
          <div id="collapse2" class="panel-collapse collapse">
            <ul class="list-group">
              <li class="list-group-item">
                <span class="badge">12</span> New
              </li>
              <li class="list-group-item">
                <span class="badge">5</span> Deleted
              </li>
            </ul>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Settings</a>
            </h4>
          </div>
          <div id="collapse3" class="panel-collapse collapse">
            <ul class="list-group">
              <li class="list-group-item">
                <span class="badge">1</span> Users Reported
              </li>
              <li class="list-group-item">
                <span class="badge">5</span> User Waiting Activation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ROUTER from "router";
export default {

};

</script>

