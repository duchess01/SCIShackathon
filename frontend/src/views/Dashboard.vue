<script setup>
import { useLayout } from '@/layout/composables/layout';
import { onMounted, ref, watch, onBeforeMount, reactive } from 'vue';
import { CustomerService } from '@/service/CustomerService';
import { ProductService } from '@/service/ProductService';
import { TaskService } from '@/service/TaskService';
import { FilterMatchMode, FilterOperator } from '@primevue/core/api';

const customers1 = ref(null);
const filters1 = ref(null);
const loading1 = ref(null);
const chartData = ref(null);
const chartOptions = ref(null);
const { getPrimary, getSurface, isDarkTheme } = useLayout();
const items = ref([
    { label: 'Add New', icon: 'pi pi-fw pi-plus' },
    { label: 'Remove', icon: 'pi pi-fw pi-trash' }
]);
const representatives = reactive([
    { name: 'Amy Elsner', image: 'amyelsner.png' },
    { name: 'Anna Fali', image: 'annafali.png' },
    { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
    { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
    { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
    { name: 'Onyama Limba', image: 'onyamalimba.png' },
    { name: 'Stephen Shaw', image: 'stephenshaw.png' },
    { name: 'XuXue Feng', image: 'xuxuefeng.png' }
]);


const displayConfirmation = ref(false);
const products = ref(null);
const verified = ref(false); 

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data));
});



const currentTask = ref(null); // Store the task currently being interacted with

function openConfirmation(task) {
    currentTask.value = task; // Set the task to the one being interacted with
    displayConfirmation.value = true;
}

function closeConfirmation() {
    displayConfirmation.value = false;
    currentTask.value = null;
}

function approveTask() {
    if (currentTask.value) {
        currentTask.value.verified = true; // Update the task's verified status to true
    }
    closeConfirmation();
}

function rejectTask() {
    if (currentTask.value) {
        currentTask.value.verified = false; // Update the task's verified status to false
    }
    closeConfirmation();
}


onBeforeMount(() => {
    ProductService.getProductsWithOrdersSmall().then((data) => (products.value = data));
    CustomerService.getCustomersSmall().then((data) => {
        customers1.value = data;
        loading1.value = false;
        customers1.value.forEach((customer) => (customer.date = new Date(customer.date)));
    });
 
    TaskService.getTasks().then((data) => (tasks.value = data));

    initFilters1();
});

function initFilters1() {
    filters1.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'Neighbourhood.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        points: { operator: FilterOperator.OR, constraints: [{ value: null,matchMode: FilterMatchMode.EQUALS }]},
        task: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        activity: { value: [0, 100], matchMode: FilterMatchMode.BETWEEN },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS }
    };
}

function formatDate(value) {
    return value.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data));
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

function setChartData() {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
            {
                type: 'bar',
                label: 'Subscriptions',
                backgroundColor: documentStyle.getPropertyValue('--p-primary-400'),
                data: [4000, 10000, 15000, 4000],
                barThickness: 32
            },
            {
                type: 'bar',
                label: 'Advertising',
                backgroundColor: documentStyle.getPropertyValue('--p-primary-300'),
                data: [2100, 8400, 2400, 7500],
                barThickness: 32
            },
            {
                type: 'bar',
                label: 'Affiliate',
                backgroundColor: documentStyle.getPropertyValue('--p-primary-200'),
                data: [4100, 5200, 3400, 7400],
                borderRadius: {
                    topLeft: 8,
                    topRight: 8
                },
                borderSkipped: true,
                barThickness: 32
            }
        ]
    };
}

function setChartOptions() {
    const documentStyle = getComputedStyle(document.documentElement);
    const borderColor = documentStyle.getPropertyValue('--surface-border');
    const textMutedColor = documentStyle.getPropertyValue('--text-color-secondary');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        scales: {
            x: {
                stacked: true,
                ticks: {
                    color: textMutedColor
                },
                grid: {
                    color: 'transparent',
                    borderColor: 'transparent'
                }
            },
            y: {
                stacked: true,
                ticks: {
                    color: textMutedColor
                },
                grid: {
                    color: borderColor,
                    borderColor: 'transparent',
                    drawTicks: false
                }
            }
        }
    };
}

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

watch([getPrimary, getSurface, isDarkTheme], () => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});


</script>

<template>
    
    <div class="font-semibold text-xl mb-4 pt-4">Task Dashboard</div>

        
        <DataTable
            :value="customers1"
            :paginator="true"
            :rows="10"
            dataKey="id"
            :rowHover="true"
            v-model:filters="filters1"
            filterDisplay="menu"
            :loading="loading1"
            :filters="filters1"
            :globalFilterFields="['name', 'Neighbourhood.name', 'representative.name', 'status']"
            showGridlines
        >
            <template #header>
                <div class="flex justify-between">
                    <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined @click="clearFilter()" />
                    <IconField>
                        <InputIcon>
                            <i class="pi pi-search" />
                        </InputIcon>
                        <InputText v-model="filters1['global'].value" placeholder="Keyword Search" />
                    </IconField>
                </div>
            </template>
            <template #empty> No customers found. </template>
            <template #loading> Loading customers data. Please wait. </template>

            <Column header="Task Name" field="task" :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem">
            

            <template #body="slotProps">
                {{ slotProps.data.task }}
            </template>

            <template #filter="{ filterModel }">
                <Select v-model="filterModel.value" :options="statuses" placeholder="Select One" showClear>
                    <template #option="slotProps">
                        <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                    </template>
                </Select>
            </template>
        </Column>

        <Column field="name" header="Karma" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.points }}
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" placeholder="Search by points" />
                </template>
            </Column>

        

            <Column field="name" header="Volunteer Name" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.name }}
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" placeholder="Search by name" />
                </template>
            </Column>
            <Column header="Neighbourhood" filterField="Neighbourhood.name" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex items-center gap-2">
                        <span>{{ data.Neighbourhood.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" placeholder="Search by Neighbourhood" />
                </template>
                <template #filterclear="{ filterCallback }">
                    <Button type="button" icon="pi pi-times" @click="filterCallback()" severity="secondary"></Button>
                </template>
                <template #filterapply="{ filterCallback }">
                    <Button type="button" icon="pi pi-check" @click="filterCallback()" severity="success"></Button>
                </template>
            </Column>
            <Column header="CC Supervisor" filterField="representative" :showFilterMatchModes="false" :filterMenuStyle="{ width: '14rem' }" style="min-width: 14rem">
                <template #body="{ data }">
                    <div class="flex items-center gap-2">
                        <img :alt="data.representative.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${data.representative.image}`" style="width: 32px" />
                        <span>{{ data.representative.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel }">
                    <MultiSelect v-model="filterModel.value" :options="representatives" optionLabel="name" placeholder="Any">
                        <template #option="slotProps">
                            <div class="flex items-center gap-2">
                                <img :alt="slotProps.option.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${slotProps.option.image}`" style="width: 32px" />
                                <span>{{ slotProps.option.name }}</span>
                            </div>
                        </template>
                    </MultiSelect>
                </template>
            </Column>
            <Column header="Date" filterField="date" dataType="date" style="min-width: 10rem">
                <template #body="{ data }">
                    {{ formatDate(data.date) }}
                </template>
                <template #filter="{ filterModel }">
                    <DatePicker v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
                </template>
            </Column>
       


            <Column field="verified" header="Task Status" dataType="boolean" bodyClass="text-center" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex items-center justify-center">
                        <i class="pi" :class="{ 'pi-check-circle text-green-500': data.verified, 'pi-times-circle text-red-500': !data.verified }" style="margin-right: 1rem;"></i>
                        <!-- Edit icon -->
                        <Button icon="pi pi-pencil" style="width: auto; background-color: white; border: none; color: black;" @click="openConfirmation(data)" />
             
                        <Dialog header="Confirmation" v-model:visible="displayConfirmation" :style="{ width: '350px' }" :modal="true">
            <div class="flex items-center justify-center">
                <i class="pi pi-exclamation-triangle mr-4" style="font-size: 2rem" />
                <span>Do you want to approve this task?</span>
            </div>
            <template #footer>
                <Button label="Approve" icon="pi pi-check" @click="approveTask" text severity="secondary" />
                <Button label="Reject" icon="pi pi-times" @click="rejectTask" severity="danger" outlined autofocus />
            </template>
        </Dialog>

        </div>
    </template>
    <template #filter="{ filterModel }">
        <label for="verified-filter" class="font-bold"> Verified </label>
        <Checkbox v-model="filterModel.value" :indeterminate="filterModel.value === null" binary inputId="verified-filter" />
    </template>
</Column>

        </DataTable>



            
</template>
