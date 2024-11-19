
<template>
  <PageContainer icon="edit_document" title="DocsPage">
    <template #content>
      <DocsExampleComponent/>
      <div class="row">
          <div class="col-12">
            Store
          </div>
          <q-btn label="add" @click="docsStore.addCount"></q-btn>
          <q-btn label="subtract" @click="docsStore.subtractCount"></q-btn>
          <q-avatar icon="arrow_forward">{{ docsStore.counter }}</q-avatar>
          <q-avatar icon="double_arrow">{{ doubleCounter }}</q-avatar>
      </div>
      
      <div class="row">
           <div class="col-12">
            Composable
          </div>
          <q-btn label="Generate random string" @click="generateRandomString()"></q-btn>
          <q-input readonly v-model="randomString"></q-input>
      </div>
      <div class="row">
           <div class="col-12">
            Service
          </div>
          <q-btn label="Init server health check" @click="initServerHealthCheck"></q-btn>
          <q-input readonly v-model="docsStore.serverHealthCheck"></q-input>
      </div>
      <div class="row">
           <div class="col-12">
            Utils
          </div>
          <q-input label="Utils formatted counter" readonly v-model="formattedCounter"></q-input>
      </div>
    </template>
  </PageContainer>

</template>

<script setup lang="ts">
import {computed} from "vue";
import PageContainer from "../../shared/components/PageContainer.vue";
import DocsExampleComponent from "../components/DocsExampleComponent.vue"
import {useDocsStore} from "../store";
import useDocsComposable from "../composables/docsComposable"

const docsStore = useDocsStore();

const doubleCounter = computed(function() {
  return docsStore.getDoubleCount
})

const formattedCounter = computed(function() {
  return docsStore.getFormattedCounter
})
const {
    randomString,
    generateRandomString
} = useDocsComposable()


const initServerHealthCheck = async() => {
    await docsStore.getServerHealthCheck()
}
</script>
    