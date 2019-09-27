<template>
  <sidebar-menu :menu="menu" />
</template>
 
<script>
export default {
  data() {
    return {
      menu: [
        {
          header: true,
          title: "Main Navigation",
          hiddenOnCollapse: true
        },
        {
          title: "Dashboard",
        },
        {
          href: "/charts",
          title: "Subjects",
          icon: "fa fa-chart-area",
        },
        {
          href: "/charts",
          title: "Personal Info",
          icon: "fa fa-chart-area",
        },
        {
          href: "/charts",
          title: "Logout",
          icon: "fa fa-chart-area",
        }
      ]
    };
  }
};
</script> 