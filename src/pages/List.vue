<template>
  <div class="wrapper">
    <h1>冷蔵庫</h1>
    <h2>136P</h2>

    <table class="tbl">
      <thead>
        <tr>
          <th>id</th>
          <th>もの</th>
          <th>コード</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item">
          <td>{{ index + 1 }}</td>
          <td>{{ item.items_box.title }}</td>
          <td>{{ item.items_box.code }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          items_box: {
            title: 'お茶あああああああああああああああああああああああああああ',
            code: '34567',
          },
        },
        {
          items_box: {
            title: 'お茶',
            code: '3456723456',
          },
        },
        {
          items_box: {
            title: 'お茶',
            code: '34567',
          },
        },
        {
          items_box: {
            title: 'お茶',
            code: '34567',
          },
        },
        {
          items_box: {
            title: 'お茶',
            code: '34567',
          },
        },
        {
          items_box: {
            title: 'お茶',
            code: '34567',
          },
        },
        {
          items_box: {
            title: 'お茶',
            code: '34567',
          },
        },
      ],
    }
  },
}
</script>

<style scoped>
.wrapper {
  padding: 20px;
  margin-bottom: 120px;
}

.tbl {
  width: 100%;
  border-spacing: 0;
  background-color: white;
  max-width: 800px;
  margin: 1rem auto;
}

table th {
  border-bottom: solid 2px #ff8e3c;
  padding: 10px 0;
}

table td {
  border-bottom: solid 2px #ddd;
  text-align: center;
  padding: 10px 20px;
}
</style>
