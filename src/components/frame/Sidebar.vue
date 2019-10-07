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
          icon: "assets/Nerissa.png",
        },
        {
          href: "/Subjects",
          title: "Subjects",
          icon: "assets/Nerissa.png",
        },
        {
          href: "/Login",
          title: "Logout",
          icon: "assets/Nerissa.png",
        },
         {
          href: "/Dashboard",
          title: "Dashboard",
          icon: "assets/Nerissa.png",
        }
      ]
    }
  }
};
</script> 