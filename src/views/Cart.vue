<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-4">
          <ul class="list-group">
            <router-link to="/cart/a" class="list-group-item" aria-current="true">元件A</router-link>
            <router-link to="/cart/b" class="list-group-item">元件B</router-link>
            <router-link to="/cart/multi/a2b" class="list-group-item">a2b</router-link>
            <router-link to="/cart/multi/c2b" class="list-group-item">c2b</router-link>
            <router-link to="/cart/products" class="list-group-item">products</router-link>
          </ul>
        </div>
        <div class="col-8">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
