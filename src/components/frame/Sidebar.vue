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
          title: "Main Menu",
          hiddenOnCollapse: true
        },
        {
          href: "/Account",
          title: "Account",
          icon: "assets/User.png",
        },
        {
          href: "/Subjects",
          title: "Subjects",
          icon: "assets/User.png",
        },
        {
          href: "/Login",
          title: "Logout",
          icon: "assets/User.png",
        }
      ]
    }
  }
};
</script> 