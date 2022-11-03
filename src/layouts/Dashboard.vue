<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import Footer from '../components/Footer.vue'

name: 'DashboardLayout'
</script>

<template>
  <div class="sb-nav-fixed">
    <Navbar />
    <div id="layoutSidenav">
      <Sidebar />
      <div id="layoutSidenav_content">
        <main>
          <router-view />
        </main>
        <Footer />
      </div>
    </div>
  </div>
</template>