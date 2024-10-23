<template>
  <PageContainer icon="timer" title="Podešavanja trajanja sesije">

    <template #content>
      <q-card-section>
        <q-item>
          <q-item-section>
            <q-item-label class="text-h6">Unesite vreme trajanja sesije:</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label>
              <q-input
                v-model.number="time"
                type="number"
                filled
                suffix="min"
                input-class="text-right"
                :rules="timeRules"
                lazy-rules
                hint="Unesite broj izražen u minutima."
              />
            </q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-btn flat
                   size="xl"
                   color="primary"
                   round
                   icon="save" @click="updateSessionTimeOut" />
            <BaseTooltip tooltip="Sačuvaj"/>
          </q-item-section>
        </q-item>
      </q-card-section>

    </template>
  </PageContainer>

</template>

<script setup lang="ts">
import {ref} from "vue";
import {useSettingsStore} from "../store";
import BaseTooltip from "../../shared/components/BaseTooltip.vue";
import {Validator} from "quasar-easy-validate";
import PageContainer from "src/modules/shared/components/PageContainer.vue";

const settingsStore = useSettingsStore();

const time = ref(settingsStore.getSessionTimeout);
const timeRules = [(time: number) => new Validator(time)
  .numeric('Morate uneti brojčanu vrednosti')
  .wholeNumber('Unos mora biti ceo broj')
  .numericMin(30, 'Sesija mora trajati barem 30 minuta')
  .numericMax(180, 'Sesije može trajati maksimalno 3 sata (180 minuta)')
  .validate()]


async function updateSessionTimeOut(){
  await settingsStore.updateUserSessionTimeoutApi(time.value);
}
//TIMEOUT END


</script>
