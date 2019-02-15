interface IRootState {
	readonly alert: IAlert
	readonly appUser: IAppUser
	readonly auth: IAuth
	readonly availabilityTemplates: IAvailabilityTemplates
	readonly benefits: IBenefits
	readonly positions: IPositions
	readonly budgets: IBudgets
	readonly jobCodes: IJobCodes
	readonly companies: ICompanies
	readonly departments: IDepartments
	readonly employees: IEmployees
	readonly emailTemplates: IEmailTemplates
	readonly exemptions: IExemptions
	readonly permissions: IPermissions
	readonly ptoTemplates: IPTOTemplates
	readonly requests: IRequests
	readonly schedules: ISchedules
	readonly schedulingAlerts: ISchedulingAlerts
	readonly skills: ISkills
	readonly stores: IStores
	readonly taskCategories: ITaskCategories
	readonly tasks: ITasks
	readonly tables: ITables
	readonly i18n: I18n
	readonly requestTypes: IRequestTypes
	readonly overtimeRules: IOvertimeRules
	readonly calendarEvents: ICalendarEvents
	readonly countries: ICountries
	readonly sideNav: ISideNav
	readonly timeClock: ITimeClockSettingsStates
	readonly modules: IModules
	readonly themes: IThemes
}

interface IAlert {
	readonly alertState: boolean
	readonly message?: string
	readonly alertLevel?: AlertLevel
}

declare enum AlertLevel {
	Success = 'Success',
	Warning = 'Warning',
	Error = 'Error'
}

interface IAppUser {
	readonly appUserGetState: API
	readonly availability: ReadonlyArray<IAvailability>
	readonly company: ICompany
	readonly defaultPosition: IPosition
	readonly defaultStore: IStore
	readonly recipients: ReadonlyArray<IRecipients>
	readonly selectedStore: IStore
	readonly stores: ReadonlyArray<IStore>
	readonly user: IUser
	readonly userDetails: Partial<IUserDetails>
	readonly statistics: IStatistic
	readonly userBenefits: ReadonlyArray<IBenefit>
	readonly userDepartments: ReadonlyArray<IDepartment>
	readonly userExemptions: ReadonlyArray<IExemption>
	readonly userPositions: ReadonlyArray<IPosition>
	readonly userSkills: ReadonlyArray<ISkill>
	readonly modules: ReadonlyArray<IModule>
}

interface IModules extends ISettingsTable, IListPayload<IModule> {
	readonly modules: ReadonlyArray<IModule>
	readonly modulesCount: number
	readonly selectedModule: IModule
	readonly selectedModules: ReadonlyArray<IModule>
	readonly selectedModulesIds: ReadonlyArray<number>
	readonly modulesGetState: API
	readonly modulesGetError: string
	readonly modulesUpdateState: API
	readonly modulesUpdateError: string
}

interface IModule {
	readonly id: number
	readonly name: string
	readonly code?: string
	readonly isActive?: number
	readonly deactivationDate?: string
	readonly activationDate?: string
	readonly moduleLog?: ReadonlyArray<IModuleLog>
	readonly storeModuleDisabled?: ReadonlyArray<IModuleDisable>
}

interface IModuleLog {
	readonly id: number
	readonly code: string
	readonly companyId: number
	readonly activationDate: string
	readonly deactivationDate: string
	readonly isActive: number
}

interface IModuleDisable {
	readonly id: number
	readonly storeId: number
	readonly moduleCode: string
}

interface IRecipients {
	readonly recipientType: IRecipientType
	readonly member: IRecipient
}

interface IRecipient {
	readonly id: number
	readonly name: string
	readonly photo: string
	readonly recipientType: IRecipientType
}

declare enum IRecipientType {
	company = 'company',
	store = 'store',
	group = 'group',
	user = 'user',
	custom = 'custom'
}

interface IStatistics {
	readonly statistics: IStatistic
	readonly userId: number
	readonly statisticsGetState: API
	readonly statisticsGetError: string
}

interface IStatistic {
	readonly absentees: number
	readonly earlyClockIns: number
	readonly lateClockIns: number
	readonly overtimeHours: number
	readonly averageShiftHours: number
}

interface IAvailability {
	readonly id: number
	readonly availabilityId: number
	readonly weekday: string
	readonly from_time: string
	readonly to_time: string
}

interface IRequestTypes extends ISettingsTable, IListPayload<IRequestType> {
	readonly drawerState: 'close' | 'open'
	readonly deleteDrawer: 'close' | 'open'
	readonly requestTypes: ReadonlyArray<IRequestType>
	readonly requestTypesCount: number
	readonly requestTypeGetState: API
	readonly requestTypeGetError: string
	readonly companyId: number
	readonly requestTypesCreateState: API
	readonly requestTypesCreateError: string
	readonly requestTypeSelected: IRequestType
	readonly requestTypesSelected: ReadonlyArray<IRequestType>
	readonly requestTypesSelectedIds: ReadonlyArray<number>
	readonly requestTypesUpdateState: API
	readonly requestTypesUpdateError: string
	readonly requestTypesDeleteError: string
	readonly requestTypesDeleteState: API
}

interface IWeekDays {
	readonly Monday: string
	readonly Sunday: string
	readonly Tuesday: string
	readonly Wednesday: string
	readonly Thursday: string
	readonly Friday: string
	readonly Saturday: string
}

interface ICompanies extends ISettingsTable, IListPayload<ICompanies> {
	readonly userCompany: ICompany
	readonly companies: ReadonlyArray<ICompany>
	readonly companiesCount: number
	readonly selectedCompany: ICompany
	readonly selectedCompanies: ReadonlyArray<ICompany>
	readonly selectedCompaniesIds: ReadonlyArray<number>
	readonly companiesGetState: API
	readonly companiesGetError: string
	readonly companiesCreateState: API
	readonly companiesCreateError: string
	readonly companiesUpdateState: API
	readonly companiesUpdateError: string
	readonly companiesDeleteState: API
	readonly companiesDeleteError: string
}

interface ICompany {
	readonly id: number
	readonly name: string
	readonly timeclock_settings?: ITimeClockSettings
	readonly billing_anniversary_date?: string
	readonly billing_last_invoice_date?: string
	readonly createdOn?: string
	readonly countryId?: number
	readonly annual_hours?: number
	readonly meal_break_length?: number
	readonly consecutive_minutes?: number
	readonly manager?: {
		readonly id: number
		readonly name: string
	}
	readonly note?: string
	readonly isActive?: number
	readonly module_options?: string
	readonly billing_type?: string
	readonly customer_profile_id?: string
	readonly payment_profile_id?: string
	readonly last_four?: string
	readonly expiration_date?: string
	readonly num_free_employees?: number
	readonly num_free_stores?: number
	readonly isTrial?: number
	readonly trialLength?: number
	readonly extractor_key?: string
	readonly extractor_v2?: number
	readonly epicorPurchasedUsers?: number
	readonly epicorPurchasedUsersThreshold?: number
	readonly epicorCustomerNumber?: number
	readonly coopNumber?: number
	readonly billToAddress?: string
	readonly stores?: ReadonlyArray<IStore>
}

interface ITimeClockSettingsStates {
	readonly timeclock_settings: ITimeClockSettings
	readonly timeClockUpdateState: API
	readonly timeClockUpdateError: string
	readonly timeClockGetState: API
	readonly timeClockGetError: string
	readonly timeClockCodeUpdateRequestIds: ReadonlyArray<number>
	readonly timeClockCodeUpdateError: string
}

interface ITimeClockSettings {
	readonly IP_allowedPool?: string
	readonly allowEntryWithPhoto?: boolean
	readonly allowJobCodeOnClockIn?: boolean
	readonly biWeeklyReferenceDate?: string
	readonly clockInLimit?: number
	readonly clockMealBreaks?: boolean
	readonly clockPaidBreaks?: boolean
	readonly isClockInLimitEnabled?: boolean
	readonly isIPRestricted?: boolean
	readonly isMealInLimitEnabled?: boolean
	readonly lateMinutes?: number
	readonly mealInLimit?: number
	readonly payPeriod?: number
	readonly payPeriodStartDay?: number
	readonly payrollProvider?: string
	readonly pdfExportLayout?: 'A4' | 'A4-L'
	readonly portalLayout?: 'classic' | 'scroll'
	readonly punchTimeoutHours?: number
	readonly reportSettings?: IReportSettings
	readonly rounding?: number
	readonly showEmployeeIdsOnPayroll?: boolean
	readonly showLogoutButton?: boolean
	readonly showTasksOnClock?: boolean
	readonly timeSheetApproval?: string
	readonly visibleEmployees?: 'scheduled' | 'all'
	readonly ADP_Store_Map?: {}
}

interface IReportSettings {
	readonly showSalariedEmployees: boolean
	readonly earlyClockInGraceTime: number
	readonly lateClockInGraceTime: number
	readonly earlyClockOutGraceTime: number
}

interface IUser {
	readonly id: number
	readonly name: string
	readonly firstName: string
	readonly lastName: string
	readonly photo: string
}

interface IUserDetails {
	readonly appData: {
		readonly subscriberAgreementUpdatedDate: string
	}
	readonly activkey: string
	readonly address: string
	readonly allowTimeClockFromAnyLocation: number
	readonly allowTimeClockOnDashboard: number
	readonly allowTimeClockWithoutBeingScheduled: number
	readonly appearsOnPayroll: number
	readonly appearsOnTimeClockPortal: number
	readonly birthdate: string
	readonly cell_phone: string
	readonly cellcarrier: string
	readonly city: string
	readonly companyId: number
	readonly compensation: number
	readonly contact_name: string
	readonly contact_phone: string
	readonly cost_type: string
	readonly cost: number
	readonly countryId: number
	readonly createdAt: string
	readonly email: string
	readonly emergencyContactName: string
	readonly emergencyContactRelation: string
	readonly emergencyPrimaryPhone: string
	readonly emergencySecondaryPhone: string
	readonly employeeId: string
	readonly firstname: string
	readonly gender: Gender
	readonly hire_date: string
	readonly home_phone: string
	readonly id: number
	readonly isActive: number
	readonly isScheduled: number
	readonly lastname: string
	readonly lastSeen: string
	readonly meal_break_length: number
	readonly name: string
	readonly note: string
	readonly number: number
	readonly paid_type: number
	readonly passwordLastChanged: string
	readonly photo: string
	readonly restrictedHours: number
	readonly state: string
	readonly term_date: string
	readonly timeClockPin: number
	readonly username: string
	readonly zipcode: number
}

declare enum Gender {
	Male = 'Male',
	Female = 'Female'
}

interface ISchedules {
	readonly userSchedules: ReadonlyArray<ISchedule>
	readonly storeSchedules: ReadonlyArray<ISchedule>
	readonly selectedWeek: IStartEndOfWeek
	readonly schedulesGetState: API
	readonly schedulesGetError: string
}

interface IStartEndOfWeek {
	readonly startDate: string
	readonly endDate: string
}

interface ISchedule {
	readonly id: number
	readonly startTime: string
	readonly endTime: string
	readonly date: string
	readonly userId: number
	readonly position: IPosition
}

interface ISchedulingAlerts extends ISettingsTable, IListPayload<ISchedulingAlert> {
	readonly schedulingAlerts: ReadonlyArray<ISchedulingAlert>
	readonly schedulingAlertsCount: number
	readonly selectedSchedulingAlert: ISchedulingAlert
	readonly selectedSchedulingAlerts: ReadonlyArray<ISchedulingAlert>
	readonly selectedSchedulingAlertsIds: ReadonlyArray<number>
	readonly schedulingAlertsGetState: API
	readonly schedulingAlertsGetError: string
	readonly schedulingAlertsCreateState: API
	readonly schedulingAlertsCreateError: string
	readonly schedulingAlertsUpdateState: API
	readonly schedulingAlertsUpdateError: string
	readonly schedulingAlertsDeleteState: API
	readonly schedulingAlertsDeleteError: string
}

interface ISchedulingAlert {
	readonly id: number
	readonly name: string
	readonly alertCode?: string
	readonly recipients?: ReadonlyArray<IRecipient>
	readonly stores?: ReadonlyArray<IStore>
	readonly sendSMS?: boolean
	readonly sendEmail?: boolean
	readonly isActive?: boolean
	readonly data?: {
		readonly sendAlertToEmployee?: boolean
		readonly generateAlertMins?: number
		readonly enableMealOut?: boolean
		readonly enableMealIn?: boolean
		readonly enableClockIn?: boolean
		readonly enableClockOut?: boolean
	}
}

interface IAuth {
	readonly appType: 'scheduling' | 'timeclock'
	readonly loginRequestState: API
	readonly token: string
	readonly loginError: string
}

interface IBenefits extends ISettingsTable, IListPayload<IBenefit> {
	readonly userBenefits: ReadonlyArray<IBenefit>
	readonly benefits: ReadonlyArray<IBenefit>
	readonly benefitsCount: number
	readonly selectedBenefit: IBenefit
	readonly selectedBenefits: ReadonlyArray<IBenefit>
	readonly selectedBenefitsIds: ReadonlyArray<number>
	readonly benefitsGetState: API
	readonly benefitsGetError: string
	readonly benefitsCreateState: API
	readonly benefitsCreateError: string
	readonly benefitsUpdateState: API
	readonly benefitsUpdateError: string
	readonly benefitsDeleteState: API
	readonly benefitsDeleteError: string
}
interface IJobCodes extends ISettingsTable, IListPayload<IJobCode> {
	readonly jobCodes: ReadonlyArray<IJobCode>
	readonly jobCodesCount: number
	readonly selectedJobCode: IJobCode
	readonly selectedJobCodes: ReadonlyArray<IJobCode>
	readonly selectedJobCodesIds: ReadonlyArray<number>
	readonly jobCodesGetState: API
	readonly jobCodesGetError: string
	readonly jobCodesCreateState: API
	readonly jobCodesCreateError: string
	readonly jobCodesUpdateState: API
	readonly jobCodesUpdateError: string
	readonly jobCodesDeleteState: API
	readonly jobCodesDeleteError: string
}

interface IBenefit {
	readonly id: number
	readonly name: string
	readonly notes?: string
	readonly stores?: ReadonlyArray<IStore>
	readonly employees?: ReadonlyArray<IEmployee>
}

interface IBudgets extends ISettingsTable, IListPayload<IBudget> {
	readonly budgets: ReadonlyArray<IBudget>
	readonly budgetsCount: number
	readonly selectedBudget: IBudget
	readonly selectedBudgets: ReadonlyArray<IBudget>
	readonly selectedBudgetsIds: ReadonlyArray<number>
	readonly budgetsGetState: API
	readonly budgetsGetError: string
	readonly budgetsCreateState: API
	readonly budgetsCreateError: string
	readonly budgetsUpdateState: API
	readonly budgetsUpdateError: string
	readonly budgetsDeleteState: API
	readonly budgetsDeleteError: string
}

interface IBudget {
	readonly id: number
	readonly period?: string
	readonly type?: string
	readonly budget?: number
	readonly referenceDate?: string
	readonly endDate?: string
	readonly stores?: ReadonlyArray<IStore>
	readonly isDefault?: number
	readonly name?: string
	readonly storeId?: number
}

interface ISkills extends ISettingsTable, IListPayload<ISkill> {
	readonly skills: ReadonlyArray<ISkill>
	readonly userSkills: ReadonlyArray<ISkill>
	readonly skillsCount: number
	readonly selectedSkill: ISkill
	readonly selectedSkills: ReadonlyArray<ISkill>
	readonly selectedSkillsIds: ReadonlyArray<number>
	readonly skillsGetState: API
	readonly skillsGetError: string
	readonly skillsCreateState: API
	readonly skillsCreateError: string
	readonly skillsUpdateState: API
	readonly skillsUpdateError: string
	readonly skillsDeleteState: API
	readonly skillsDeleteError: string
}

interface ISkill {
	readonly id: number
	readonly name: string
	readonly description?: string
	readonly employees?: ReadonlyArray<IEmployee>
}

interface IStores extends ISettingsTable, IListPayload<IStore> {
	readonly stores: ReadonlyArray<IStore>
	readonly userStores: ReadonlyArray<IStore>
	readonly storesCount: number
	readonly selectedStore: IStore
	readonly selectedStores: ReadonlyArray<IStore>
	readonly selectedStoresIds: ReadonlyArray<number>
	readonly storesGetState: API
	readonly storesGetError: string
	readonly storesCreateState: API
	readonly storesCreateError: string
	readonly storesUpdateState: API
	readonly storesUpdateError: string
	readonly storesDeleteState: API
	readonly storesDeleteError: string
}

interface IStore {
	readonly id: number
	readonly companyId: number
	readonly name: string
	readonly number?: number
	readonly vendorId?: number
	readonly countryId: number
	readonly address?: string
	readonly phone1?: number
	readonly phone2?: number
	readonly fax1?: number
	readonly fax2?: number
	readonly city?: string
	readonly zipcode?: number
	readonly time_zone: string
	readonly state?: string
	readonly meal_break_length?: number
	readonly consecutive_minutes?: number
	readonly start_day?: number
	readonly start_time?: string
	readonly end_time?: string
	readonly isActive?: boolean
	readonly notes?: string
	readonly dashboardPin?: string
}
interface IDepartments extends ISettingsTable, IListPayload<IDepartment> {
	readonly departments: ReadonlyArray<IDepartment>
	readonly userDepartments: ReadonlyArray<IDepartment>
	readonly departmentsCount: number
	readonly selectedDepartment: IDepartment
	readonly selectedDepartments: ReadonlyArray<IDepartment>
	readonly selectedDepartmentsIds: ReadonlyArray<number>
	readonly departmentsGetState: API
	readonly departmentsGetError: string
	readonly departmentsCreateState: API
	readonly departmentsCreateError: string
	readonly departmentsUpdateState: API
	readonly departmentsUpdateError: string
	readonly departmentsDeleteState: API
	readonly departmentsDeleteError: string
}

interface IDepartment {
	readonly id: number
	readonly name: string
	readonly number?: number
	readonly notes?: string
	readonly employees?: ReadonlyArray<IEmployee>
	readonly stores?: ReadonlyArray<IStore>
}

interface IOvertimeRules extends ISettingsTable, IListPayload<IOvertimeRule> {
	readonly overtimeRules: ReadonlyArray<IOvertimeRule>
	readonly overtimeRulesCount: number
	readonly selectedOvertimeRule: IOvertimeRule
	readonly selectedOvertimeRules: ReadonlyArray<IOvertimeRule>
	readonly selectedOvertimeRulesIds: ReadonlyArray<number>
	readonly overtimeRulesGetState: API
	readonly overtimeRulesGetError: string
	readonly overtimeRulesCreateState: API
	readonly overtimeRulesCreateError: string
	readonly overtimeRulesUpdateState: API
	readonly overtimeRulesUpdateError: string
	readonly overtimeRulesDeleteState: API
	readonly overtimeRulesDeleteError: string
	readonly overtimeRulesTemplateCreateState: API
	readonly overtimeRulesTemplateCreateError: string
}

interface IOvertimeRule {
	readonly id: number
	readonly name: string
	readonly enabled?: boolean
	readonly rate?: string
	readonly identifier?: string
	readonly week?: { readonly enabled?: boolean; readonly threshold: number }
	readonly daily?: ReadonlyArray<{
		readonly enabled?: boolean
		readonly threshold: number
	}>
	readonly consecutiveDays?: ReadonlyArray<{
		readonly enabled?: boolean
		readonly value: number
	}>
	readonly holidays?: ReadonlyArray<number>
	readonly overtimeRuleEmployees?: ReadonlyArray<IEmployee>
	readonly stores?: ReadonlyArray<IStore>
}

interface IJobCode {
	readonly id: number
	readonly name: string
	readonly notes?: string
	readonly code?: string
}

interface IEmailTemplates extends ISettingsTable, IListPayload<IEmailTemplate> {
	readonly emailTemplates: ReadonlyArray<IEmailTemplate>
	readonly emailTemplatesCount: number
	readonly selectedEmailTemplate: IEmailTemplate
	readonly selectedEmailTemplates: ReadonlyArray<IEmailTemplate>
	readonly selectedEmailTemplatesIds: ReadonlyArray<number>
	readonly emailTemplatesGetState: API
	readonly emailTemplatesGetError: string
	readonly emailTemplatesUpdateState: API
	readonly emailTemplatesUpdateError: string
}

interface IEmailTemplate {
	readonly id: number
	readonly name: string
	readonly body: string
}

interface IAvailabilityTemplates extends ISettingsTable, IListPayload<IAvailabilityTemplate> {
	readonly availabilityTemplates: ReadonlyArray<IAvailabilityTemplate>
	readonly availabilityTemplatesCount: number
	readonly selectedAvailabilityTemplate: IAvailabilityTemplate
	readonly selectedAvailabilityTemplates: ReadonlyArray<IAvailabilityTemplate>
	readonly selectedAvailabilityTemplatesIds: ReadonlyArray<number>
	readonly availabilityTemplatesGetState: API
	readonly availabilityTemplatesGetError: string
	readonly availabilityTemplatesCreateState: API
	readonly availabilityTemplatesCreateError: string
	readonly availabilityTemplatesUpdateState: API
	readonly availabilityTemplatesUpdateError: string
	readonly availabilityTemplatesDeleteState: API
	readonly availabilityTemplatesDeleteError: string
}

interface IAvailabilityTemplate {
	readonly id: number
	readonly name: string
	readonly notes?: string
	readonly default?: boolean
	readonly availability?: ReadonlyArray<IAvailability>
}

interface ITaskCategories extends ISettingsTable, IListPayload<ITaskCategory> {
	readonly taskCategories: ReadonlyArray<ITaskCategory>
	readonly taskCategoriesCount: number
	readonly selectedTaskCategory: ITaskCategory
	readonly selectedTaskCategories: ReadonlyArray<ITaskCategory>
	readonly selectedTaskCategoriesIds: ReadonlyArray<number>
	readonly taskCategoriesGetState: API
	readonly taskCategoriesGetError: string
	readonly taskCategoriesCreateState: API
	readonly taskCategoriesCreateError: string
	readonly taskCategoriesUpdateState: API
	readonly taskCategoriesUpdateError: string
	readonly taskCategoriesDeleteState: API
	readonly taskCategoriesDeleteError: string
}

interface ITaskCategory {
	readonly id: number
	readonly name: string
	readonly notes?: string
}

interface ITasks extends ISettingsTable, IListPayload<ITask> {
	readonly tasks: ReadonlyArray<ITask>
	readonly tasksCount: number
	readonly selectedTask: ITask
	readonly selectedTasks: ReadonlyArray<ITask>
	readonly selectedTasksIds: ReadonlyArray<number>
	readonly tasksGetState: API
	readonly tasksGetError: string
	readonly tasksCreateState: API
	readonly tasksCreateError: string
	readonly tasksUpdateState: API
	readonly tasksUpdateError: string
	readonly tasksDeleteState: API
	readonly tasksDeleteError: string
}

interface IRecurrenceOptions {
	readonly once_date?: string
	readonly weekend?: boolean
	readonly days?: number
	readonly weeks?: number
	readonly saturday?: boolean
	readonly sunday?: boolean
	readonly monday?: boolean
	readonly tuesday?: boolean
	readonly wednesday?: boolean
	readonly thursday?: boolean
	readonly friday?: boolean
	readonly months?: number
	readonly day?: number
	readonly month?: IDropDownData | string
}

interface ITask {
	readonly id: number
	readonly name: string
	readonly auto_scheduling?: number
	readonly description?: string
	readonly duration?: number
	readonly end_date?: string
	readonly end_time?: string
	readonly isActive?: boolean
	readonly isConcurrent?: boolean
	readonly isRotation?: boolean
	readonly stores?: ReadonlyArray<IStore>
	readonly positions?: ReadonlyArray<IPosition>
	readonly exemptions?: ReadonlyArray<IExemption>
	readonly skills?: ReadonlyArray<ISkill>
	readonly recurrence_options?: IRecurrenceOptions
	readonly recurrence_type?: string
	readonly start_date?: string
	readonly start_time?: string
	readonly task_category_id?: number
}

interface IList {
	readonly id: number
	readonly subject: string
	readonly createdAt: string
	readonly creator: ICreator
	readonly messages: IMessages
}

interface IMessages {
	readonly body: string
}

interface ICreator {
	readonly name: string
}

interface IEmployees extends ISettingsTable, IListPayload<IEmployee> {
	readonly employees: ReadonlyArray<IEmployee>
	readonly employeesCount: number
	readonly selectedEmployee: IEmployee
	readonly selectedEmployees: ReadonlyArray<IEmployee>
	readonly selectedEmployeesIds: ReadonlyArray<number>
	readonly employeesGetState: API
	readonly employeesGetError: string
	readonly employeesCreateState: API
	readonly employeesCreateError: string
	readonly employeesUpdateState: API
	readonly employeesUpdateError: string
	readonly employeesDeleteState: API
	readonly employeesDeleteError: string
}

interface IEmployee {
	readonly id: number
	readonly name: string
	readonly absentees?: number
	readonly address?: string
	readonly availability?: ReadonlyArray<IAvailability>
	readonly averageShiftHours?: number
	readonly birthdate?: string
	readonly cell_phone?: string
	readonly defaultPosition?: IPosition
	readonly defaultStore?: IStore
	readonly earlyClockIns?: number
	readonly email?: string
	readonly gender?: 'MALE' | 'FEMALE'
	readonly countryId?: number
	readonly city?: string
	readonly state?: string
	readonly zipcode?: number
	readonly home_phone?: string
	readonly cellcarrier?: string
	readonly emergencyContactRelation?: string
	readonly emergencySecondaryPhone?: string
	readonly emergencyContactName?: string
	readonly emergencyPrimaryPhone?: string
	readonly employeeId?: string
	readonly firstname?: string
	readonly hire_date?: string
	readonly lastname?: string
	readonly lateClockIns?: number
	readonly mealInLimit?: number
	readonly nextVacation?: string
	readonly number?: number
	readonly overtimeHours?: number
	readonly photo?: string
	readonly positionName?: string
	readonly restrictedHours?: number
	readonly statistics?: IStatistic
	readonly storeName?: string
	readonly stores?: ReadonlyArray<IStore> | ReadonlyArray<number>
	readonly defaultStoreId?: number
	readonly defaultPositionId?: number
	readonly timeClockPin?: number
	readonly userBenefits?: ReadonlyArray<IBenefit>
	readonly userDepartments?: ReadonlyArray<IDepartment>
	readonly userExemptions?: ReadonlyArray<IExemption>
	readonly username?: string
	readonly userPositions?: ReadonlyArray<IPosition>
	readonly userSkills?: ReadonlyArray<ISkill>
}

interface IExemptions extends ISettingsTable, IListPayload<IExemption> {
	readonly exemptionsGetState: string
	readonly exemptionsGetError: string
	readonly exemptionCreateState: API
	readonly exemptionCreateError: string
	readonly exemptionUpdateState: API
	readonly exemptionUpdateError: string
	readonly exemptionsDeleteState: API
	readonly exemptionsDeleteError: string
	readonly selectedExemption: IExemption
	readonly exemptions: ReadonlyArray<IExemption>
	readonly exemptionsCount: number
	readonly selectedExemptions: ReadonlyArray<IExemption>
	readonly selectedExemptionsIds: ReadonlyArray<number>
	readonly userExemptions: ReadonlyArray<IExemption>
}

interface IExemption {
	readonly id: number
	readonly name: string
	readonly notes?: string
	readonly employees?: ReadonlyArray<IEmployee>
	readonly stores?: ReadonlyArray<IStore>
}

interface ICountries {
	readonly countriesGetState: API
	readonly countriesGetError: string
	readonly countries: ReadonlyArray<ICountry>
	readonly countriesCount: number
}

interface ICountry {
	readonly id: number
	readonly name: string
}
interface IPTOTemplates extends ISettingsTable, IListPayload<IPTOTemplate> {
	readonly ptoTemplates: ReadonlyArray<IPTOTemplate>
	readonly ptoTemplatesCount: number
	readonly selectedPTOTemplate: IPTOTemplate
	readonly selectedPTOTemplates: ReadonlyArray<IPTOTemplate>
	readonly selectedPTOTemplatesIds: ReadonlyArray<number>
	readonly ptoTemplatesGetState: string
	readonly ptoTemplatesGetError: string
	readonly ptoTemplatesCreateState: API
	readonly ptoTemplatesCreateError: string
	readonly ptoTemplatesUpdateState: API
	readonly ptoTemplatesUpdateError: string
	readonly ptoTemplatesDeleteState: API
	readonly ptoTemplatesDeleteError: string
}

interface IPTOTemplate {
	readonly id: number
	readonly name: string
	readonly period?: string
	readonly excusedTimeId?: number
	readonly hoursStartOfPeriod?: number
	readonly maxHours?: number
	readonly maxCarryHours?: number
	readonly resetHours?: boolean
	readonly accrueHoursPaid?: boolean
	readonly accrueOvertimeHoursPaid?: boolean
}

interface IRequests extends ISettingsTable, IListPayload<IRequest> {
	readonly requests: ReadonlyArray<IRequest>
	readonly userRequests: ReadonlyArray<IRequest>
	readonly requestsCount: number
	readonly nextVacation: string
	readonly selectedRequest: IRequest
	readonly selectedRequests: ReadonlyArray<IRequest>
	readonly selectedRequestsIds: ReadonlyArray<number>
	readonly requestsGetState: API
	readonly requestsGetError: string
	readonly requestsCreateState: API
	readonly requestsCreateError: string
	readonly requestsUpdateState: API
	readonly requestsUpdateError: string
	readonly requestsDeleteState: API
	readonly requestsDeleteError: string
	readonly reviewDrawer: 'close' | 'open'
}

interface IRequest {
	readonly id: number
	readonly notes: string
	readonly employee?: IEmployee
	readonly actionType?: string
	readonly paidHours?: number
	readonly received?: string
	readonly startDate?: string
	readonly endDate?: string
	readonly startTime?: string
	readonly endTime?: string
	readonly requestDayType?: string
	readonly requestDayTypeVerbose?: string
	readonly reviewComment?: string
	readonly excusedTimeId?: number
	readonly requestType?: IRequestType
	readonly userId?: number
	readonly notify_user?: boolean
}

interface IRequestType {
	readonly id: number
	readonly name: string
	readonly typeCode?: string
	readonly isPaid?: number
	readonly isDefault?: number
}

interface IPositions extends ISettingsTable, IListPayload<IPosition> {
	readonly userPositions: ReadonlyArray<IPosition>
	readonly positions: ReadonlyArray<IPosition>
	readonly positionsCount: number
	readonly selectedPosition: IPosition
	readonly selectedPositions: ReadonlyArray<IPosition>
	readonly selectedPositionsIds: ReadonlyArray<number>
	readonly positionsGetState: API
	readonly positionsGetError: string
	readonly positionsCreateState: API
	readonly positionsCreateError: string
	readonly positionsUpdateState: API
	readonly positionsUpdateError: string
	readonly positionsDeleteState: API
	readonly positionsDeleteError: string
}

interface IPosition {
	readonly id: number
	readonly name: string
	readonly description?: string
	readonly color?: string
	readonly jobCodeId?: number
	readonly weight?: number
	readonly isAdministrative?: boolean
	readonly isCustomerFacing?: boolean
	readonly stores?: ReadonlyArray<IStore>
	readonly employees?: ReadonlyArray<IEmployee>
}
interface ICalendarEvents extends ISettingsTable, IListPayload<ICalendarEvent> {
	readonly calendarEvents: ReadonlyArray<ICalendarEvent>
	readonly calendarEventsCount: number
	readonly selectedCalendarEvent: ICalendarEvent
	readonly selectedCalendarEvents: ReadonlyArray<ICalendarEvent>
	readonly selectedCalendarEventsIds: ReadonlyArray<number>
	readonly calendarEventsGetState: API
	readonly calendarEventsGetError: string
	readonly calendarEventsCreateState: API
	readonly calendarEventsCreateError: string
	readonly calendarEventsUpdateState: API
	readonly calendarEventsUpdateError: string
	readonly calendarEventsDeleteState: API
	readonly calendarEventsDeleteError: string
}

interface ICalendarEvent {
	readonly id: number
	readonly name: string
	readonly type?: string
	readonly body?: string
	readonly stores?: ReadonlyArray<IStore>
}

interface IPermissions {
	readonly permissions: Partial<IPermissionsList>
	readonly roles: Partial<IRoles>
	readonly superPrivileges: SuperPrivileges
	readonly permissionsGetState: API
	readonly permissionsGetError: string
}

interface IPermissionsList {
	readonly assignOwnStoreTask: string
	readonly createOwnStoreTask: string
	readonly createTask: string
	readonly deleteOwnStoreTask: string
	readonly deleteTask: string
	readonly manageOwnStoreTaskCards: string
	readonly markOwnStoreTask: string
	readonly markTask: string
	readonly updateOwnStoreTask: string
	readonly updateTask: string
	readonly viewOwnStoreDashboard: string
	readonly viewOwnStoreHotfloor: string
	readonly viewOwnStoreSchedule: string
	readonly viewOwnStoreSchedulingApp: string
	readonly viewOwnStoreTask: string
	readonly viewTask: string
	readonly addNote: string
	readonly assignUnassignAdministrativePosition: string
	readonly assignUnassignOwnStoreAdministrativePosition: string
	readonly assignUnassignStore: string
	readonly createEmployee: string
	readonly createOwnStoreCalendarEvent: string
	readonly createOwnStoreEmployee: string
	readonly deleteEmployee: string
	readonly deleteNote: string
	readonly deleteOwnStore: string
	readonly deleteOwnStoreCalendarEvent: string
	readonly deleteOwnStoreEmployee: string
	readonly editNote: string
	readonly switchStore: string
	readonly updateEmployee: string
	readonly updateEmployeeAvailability: string
	readonly updateOwnStore: string
	readonly updateOwnStoreCalendarEvent: string
	readonly updateOwnStoreEmployee: string
	readonly updateOwnStoreEmployeeAvailability: string
	readonly updateOwnStoreSchedulingForecastData: string
	readonly updateSchedulingForecastData: string
	readonly viewEmployee: string
	readonly viewHotfloor: string
	readonly viewNote: string
	readonly viewOwnStoreCalendarEvent: string
	readonly viewOwnStoreEmployee: string
	readonly viewOwnStoreSchedulingBudgetVar: string
	readonly viewOwnStoreSchedulingForecastData: string
	readonly viewSchedule: string
	readonly viewSchedulingBudgetVar: string
	readonly viewSchedulingForecastData: string
	readonly createCalendarEvent: string
	readonly deleteCalendarEvent: string
	readonly updateCalendarEvent: string
	readonly viewCalendarEvent: string
	readonly viewOwnStoreTransactions: string
	readonly viewSchedulingApp: string
}

interface IRoles {
	readonly superadmin: 'superadmin'
	readonly epicoradmin: 'epicoradmin'
}

interface ISideNav {
	readonly navBarPosition: string
}

interface ITables {
	readonly rowsPerPage: number
	readonly filter: string
}

interface ISettingsTable {
	readonly drawerState: 'close' | 'open'
	readonly deleteDrawer: 'close' | 'open'
	readonly profileDrawer?: 'close' | 'open'
	readonly page: number
}

interface I18n {
	readonly selectedLanguage: ILanguage
	readonly languages: ReadonlyArray<ILanguage>
}

interface ILanguage {
	readonly label: string
	readonly value: string
	readonly direction: 'ltr' | 'rtl'
}

interface IThemes {
	readonly selectedTheme: ITheme
	readonly themes: ReadonlyArray<ITheme>
}

interface ITheme {
	readonly label: string
	readonly value: string
}

interface IThemeColors {
	readonly primary: string
	readonly primaryLight: string
	readonly primaryDark: string
	readonly secondary: string
	readonly secondaryDark: string
	readonly secondaryLight: string
	readonly accent: string
	readonly accentLight: string
	readonly accentDark: string
	readonly background: string
	readonly profileBackground: string
	readonly danger: string
	readonly gray: string
	readonly warning: string
	readonly info: string
	readonly success: string
	readonly icons: string
}

/* ------------------------------------------------- */
// Actions Types
/* ------------------------------------------------- */
interface IAction<P, T> {
	readonly payload?: P
	readonly type: T
}

/* ------------------------------------------------- */
// API State
// Its duplicate enum cause you can't import in globals.d.ts
/* ------------------------------------------------- */
declare enum API {
	NOT_REQUESTED = 'API_NOT_REQUESTED',
	REQUEST_PENDING = 'API_REQUEST_PENDING',
	REQUEST_SUCCESS = 'API_REQUEST_SUCCESS',
	REQUEST_ERROR = 'API_REQUEST_ERROR'
}

/* ------------------------------------------------- */
// Useful Types
/* ------------------------------------------------- */
interface IListPayload<T> {
	readonly limit?: number
	readonly offset?: number
	readonly sort?: string
	readonly orderBy?: keyof T
	readonly orderType?: 'asc' | 'desc'
}

interface ITableHeader<TData> {
	readonly id: keyof TData
	readonly label: string
}

interface IBasicTableData {
	readonly id: {
		readonly component: React.ReactText
		readonly value: React.ReactText
	}
}

type ITableData<T> = {
	readonly [K in keyof T]: {
		readonly component: T[K] | React.ReactNode
		readonly value: T[K]
	}
} &
	IBasicTableData

type Mutable<T> = { -readonly [K in keyof T]: T[K] }

interface IDropDownData<T = number | string> {
	readonly label: string
	readonly value: T
}

declare enum SuperPrivileges {
	None = 'none',
	Read = 'read',
	Write = 'write'
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

// tslint:disable-next-line:max-file-line-count
