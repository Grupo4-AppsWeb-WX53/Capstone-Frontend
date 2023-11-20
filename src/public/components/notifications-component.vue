<template>
  <h1>Notifications</h1>


  <pv-card class="activity">
    <template #content>
      <div class="flex inline-block justify-content-between text-gray-700">
        <span class="material-icons">notifications</span>
        <h3>Notification 1</h3>
        <div>
          <button @click="showNotifications">View notifications</button>
          <notifications />

        </div>
      </div>
    </template>
  </pv-card>

  <pv-card class="activity">
    <template #content>
      <div class="flex inline-block justify-content-between text-gray-700">
        <span class="material-icons">notifications</span>
        <h3>Notification 2</h3>
        <div>
          <button @click="showNotifications">View notifications</button>
          <notifications />

        </div>
      </div>
    </template>
  </pv-card>

  <pv-card class="activity">
    <template #content>
      <div class="flex inline-block justify-content-between text-gray-700">
        <span class="material-icons">notifications</span>
        <h3>Notification 3</h3>
        <div>
          <button @click="showNotifications">View notifications</button>
          <notifications />

        </div>
      </div>
    </template>
  </pv-card>

  <pv-card class="activity">
    <template #content>
      <div class="flex inline-block justify-content-between text-gray-700">
        <span class="material-icons">notifications</span>
        <h3>Notification 4</h3>
        <div>
          <button @click="showNotifications">View notifications</button>
          <notifications />

        </div>
      </div>
    </template>
  </pv-card>


</template>

<script>
export default {
  methods: {
    showNotifications() {
      this.$notify({
        group: 'app',
        title: 'Notificación 1',
        text: '¡Esta es la primera notificación!',
      });

      this.$notify({
        group: 'app',
        title: 'Notificación 2',
        text: '¡Esta es la segunda notificación!',
      });

      this.$notify({
        group: 'app',
        title: 'Notificación 3',
        text: '¡Esta es la tercera notificación!',
      });
    },
  },
};
</script>

<style scoped>
button {
  padding: 10px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

/* Estilos para las notificaciones */
.notification-item {
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  border-radius: 4px;
  margin: 10px 0;
}

.notification-item-title {
  font-weight: bold;
  margin-bottom: 5px;
}

.notification-item-text {
  margin-bottom: 0;
}
.icon-container {
  margin-right: 10px; /* Ajusta el espacio entre el ícono y el texto */
}

.text-container {
  flex-grow: 1; /* Permite que el texto ocupe el espacio restante */
}
</style>
