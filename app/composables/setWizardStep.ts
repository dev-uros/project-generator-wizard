import {
    BACKEND_OPTION,
    BACKOFFICE_ANGULAR_BACKENDS,
    BACKOFFICE_FRONTENDS,
    BACKOFFICE_QUASAR_BACKENDS,
    DESKTOP_BACKENDS,
    DESKTOP_FRONTENDS, DOCUMENTATION_BACKEND,
    DOCUMENTATION_FRONTENDS,
    FRONTEND_OPTION,
    MICROSERVICE_BACKENDS,
    MICROSERVICE_FRONTENDS, MOBILE_BACKENDS, MOBILE_FRONTENDS,
    PROJECT_TYPES,
    WEBSITE_BACKENDS,
    WEBSITE_FRONTENDS
} from "~/constants";
import {isObjectTypeAnnotation} from "@babel/types";

export const useSetWizardStep = () => {

    const wizardSteps = ref([{
        label: 'Project Flavour',
        icon: 'tabler:components',
        description: 'Select project flavour that you would like to conjure',
        disabled: false,
    }, {
        label: 'Frontend Flavour',
        icon: 'mage:color-swatch',
        description: 'Select your user interface magic',
        disabled: true,
    }, {
        label: 'Backend Flavour',
        icon: 'mdi:server',
        description: 'Finally, this is the content for Tab3',
        disabled: true
    }]);

    const currentlySelectedStepIndex = ref(0);

    const selectedStep = computed({
        get() {
            return currentlySelectedStepIndex.value
        },
        set(newSelectedValueIndex: number) {
            currentlySelectedStepIndex.value = newSelectedValueIndex
        }
    })

    const selectedProjectFlavour = ref(null)

    const projectTypeOptions = ref(PROJECT_TYPES);

    const frontendOptions: Ref<FRONTEND_OPTION[]> = ref(BACKOFFICE_FRONTENDS);

    const backendOptions: Ref<BACKEND_OPTION[]> = ref(BACKOFFICE_QUASAR_BACKENDS);

    const selectedFrontend = ref(null);

    const selectedBackend = ref(null)

    const wizardSummaryModal = ref(false);


    const setWizardStep = (optionIndex: number, optionValue: string) => {

        switch (optionIndex) {
            case 0:
                handleGoToProjectFlavourStep(optionIndex)
                setTimeout(() => selectedStep.value = optionIndex, 0)
                break;

            case 1:
                handleGoToFrontendFlavourStep(optionIndex, optionValue)
                setTimeout(() => selectedStep.value = optionIndex, 0)
                break;

            case 2:
                handleGoToBackendFlavourStep(optionIndex, optionValue)
                setTimeout(() => selectedStep.value = optionIndex, 0)
                break
            case 3:
                handleGoToSummaryStep(optionValue)
                break;
            default:
                console.error('not supported');
        }

    }

    const handleGoToProjectFlavourStep = (index: number) => {
        wizardSteps.value[index].disabled = false;
        wizardSteps.value[1].disabled = true;
        wizardSteps.value[2].disabled = true;
    }

    const handleGoToFrontendFlavourStep = (optionIndex: number, optionValue: string) => {
        

        if (optionValue === 'backoffice') {
            selectedProjectFlavour.value = PROJECT_TYPES.find(type => type.value === optionValue);

            frontendOptions.value = BACKOFFICE_FRONTENDS;
        }

        if (optionValue === 'website') {
            selectedProjectFlavour.value = PROJECT_TYPES.find(type => type.value === optionValue);

            frontendOptions.value = WEBSITE_FRONTENDS;
        }

        if (optionValue === 'mobile') {
            selectedProjectFlavour.value = PROJECT_TYPES.find(type => type.value === optionValue);

            frontendOptions.value = MOBILE_FRONTENDS;
        }

        if (optionValue === 'desktop') {
            selectedProjectFlavour.value = PROJECT_TYPES.find(type => type.value === optionValue);

            frontendOptions.value = DESKTOP_FRONTENDS
        }

        if(optionValue === 'microservice'){

            selectedProjectFlavour.value = PROJECT_TYPES.find(type => type.value === optionValue);

            frontendOptions.value = MICROSERVICE_FRONTENDS
        }

        if(optionValue === 'documentation'){

            selectedProjectFlavour.value = PROJECT_TYPES.find(type => type.value === optionValue);

            frontendOptions.value = DOCUMENTATION_FRONTENDS
        }

        wizardSteps.value[0].disabled = true;
        wizardSteps.value[optionIndex].disabled = false;
        wizardSteps.value[2].disabled = true;
    }

    const handleGoToBackendFlavourStep = (optionIndex: number, optionValue: string) => {

        selectedFrontend.value = frontendOptions.value.find(option => option.value === optionValue)

        if (selectedProjectFlavour.value.value === 'backoffice') {

            switch (optionValue) {
                case 'quasar':
                    backendOptions.value = BACKOFFICE_QUASAR_BACKENDS
                    break;
                case 'angular':
                    backendOptions.value = BACKOFFICE_ANGULAR_BACKENDS
                    break;
                default:
                    console.error('not supported')
            }
        }

        if (selectedProjectFlavour.value.value === 'website') {
            backendOptions.value = WEBSITE_BACKENDS
        }

        if (selectedProjectFlavour.value.value === 'mobile') {
            backendOptions.value = MOBILE_BACKENDS
        }
        if (selectedProjectFlavour.value.value === 'desktop') {
            backendOptions.value = DESKTOP_BACKENDS
        }

        if (selectedProjectFlavour.value.value === 'microservice') {
            backendOptions.value = MICROSERVICE_BACKENDS
        }

        if (selectedProjectFlavour.value.value === 'documentation') {
            backendOptions.value = DOCUMENTATION_BACKEND
        }
        wizardSteps.value[0].disabled = true;
        wizardSteps.value[1].disabled = true;
        wizardSteps.value[optionIndex].disabled = false;
    }


    const handleGoToSummaryStep = (optionValue: string) => {

        selectedBackend.value = backendOptions.value.find(option => option.value === optionValue);


        wizardSummaryModal.value = true

    }
    return {
        wizardSteps,
        selectedStep,
        projectTypeOptions,
        frontendOptions,
        backendOptions,
        wizardSummaryModal,
        selectedProjectFlavour,
        selectedFrontend,
        selectedBackend,
        setWizardStep
    }
}
