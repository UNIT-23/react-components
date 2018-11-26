import moment, { unitOfTime } from "moment"
import momentTz from "moment-timezone"

export function getLocalDateTime() {
	return moment().format("YYYY-MM-DD HH:mm:ss")
}

export function getLocalTime(format = "hh:mm A") {
	return moment().format(format)
}

export function getTimeForZone(tz: string, format = "hh:mm A") {
	return tz
		? momentTz(moment())
				.tz(tz)
				.format(format)
		: moment().format(format)
}

export function getLocalDate(format = "YYYY-MM-DD") {
	return moment().format(format)
}

export function formatToLocalDate(date: string, format = "YYYY-MM-DD hh:mm:ss A", skipOffset = false) {
	return skipOffset
		? moment(date).format(format)
		: moment
				.utc(jsDateToMomentDate(date))
				.local()
				.format(format)
}

export function formatDate(date: string, format = "YYYY-MM-DD") {
	return moment(date).format(format)
}

export function formatNonStandardDate(
	date: string,
	currentFormat = "YYYY-MM-DD hh:mm:ss A",
	format = "YYYY-MM-DD HH:mm:ss"
) {
	return moment(date, currentFormat).format(format)
}

export function formatToLocalDateExtended(date: string, utc = true) {
	if (utc === false) {
		return moment(date).format("ddd, DD MMM YYYY")
	}

	const utcOffset = moment().utcOffset()

	return moment
		.utc(jsDateToMomentDate(date))
		.utcOffset(utcOffset)
		.format("ddd, DD MMM YYYY")
}

export function getDateNumber(date: string) {
	const dateStr = moment(jsDateToMomentDate(date)).format("DD")

	return Number(dateStr)
}

export function formatToLocalTime(date: string) {
	const utcOffset = moment().utcOffset()

	return moment
		.utc(jsDateToMomentDate(date))
		.utcOffset(utcOffset)
		.format("hh:mm A")
}

export function diffDates(startDate: string, endDate: string) {
	const startMoment = moment(startDate, "YYYY-MM-DD")
	const endMoment = moment(endDate, "YYYY-MM-DD")

	return endMoment.diff(startMoment, "days")
}

export function diffTimes(startTime: string, endTime: string, unit = "hours") {
	const startMoment = moment(startTime, "YYYY-MM-DD HH:mm:ss")
	const endMoment = moment(endTime, "YYYY-MM-DD HH:mm:ss")

	return endMoment.diff(startMoment, (unit as unknown) as unitOfTime.Diff)
}

export function addTime(time: string, value: unitOfTime.Diff, unit = "hours") {
	const parsedTime = moment(time, "YYYY-MM-DD HH:mm:ss")

	return parsedTime.add(value, unit).format("YYYY-MM-DD HH:mm:ss")
}

export function updateDate(date = moment(), updateByAmount: number, updateType = "days", format = "YYYY-MM-DD") {
	const positiveUpdateByAmount = Math.abs(updateByAmount)

	return updateByAmount > 0
		? moment(date)
				.add((positiveUpdateByAmount as unknown) as unitOfTime.Diff, updateType)
				.format(format)
		: moment(date)
				.subtract((positiveUpdateByAmount as unknown) as unitOfTime.Diff, updateType)
				.format(format)
}

export function getAllDatesInRange(
	howFarBack: number,
	dateFormat = "YYYY-MM-DD",
	unitOfRange = "months",
	resolution = "days"
) {
	const startDate = moment().subtract((howFarBack as unknown) as unitOfTime.Diff, unitOfRange)
	const endDate = moment().add((howFarBack as unknown) as unitOfTime.Diff, unitOfRange)

	const diff = endDate.diff(startDate, (resolution as unknown) as unitOfTime.Diff)

	if (!startDate.isValid() || !endDate.isValid() || diff <= 0) {
		return []
	}

	return Array.from({ length: diff }).map(() =>
		endDate.subtract((1 as unknown) as unitOfTime.Diff, resolution).format(dateFormat)
	)
}

export function getStartEndOfWeek(someDateOfWeek = moment().format("YYYY-MM-DD"), format = "YYYY-MM-DD") {
	const startDate = moment(someDateOfWeek)
		.startOf("isoWeek")
		.format(format)
	const endDate = moment(someDateOfWeek)
		.endOf("isoWeek")
		.format(format)

	return {
		startDate,
		endDate
	}
}

export function getDatesForWeek(someDateOfWeek = moment().format("YYYY-MM-DD"), format = "YYYY-MM-DD") {
	const diff = 7
	const resolution = "days"
	const startDateOfWeek = moment(someDateOfWeek).startOf("isoWeek")

	return [
		startDateOfWeek.format(format),
		...Array.from({ length: diff - 1 }).map(() => startDateOfWeek.add(1, resolution).format(format))
	]
}

export function convertLocalToUTC(date: string) {
	return moment(date).utc()
}

export function convertToFuzzyTime(date: string, skipOffset: boolean = true) {
	return moment(formatToLocalDate(date, "YYYY-MM-DD HH:mm:ss", skipOffset)).fromNow()
}

function jsDateToMomentDate(date: string) {
	const fromJSDate = moment.utc(date, "ddd MMM DD YYYY hh:mm:ss GMT+0000")

	return fromJSDate.isValid() ? fromJSDate : moment(date)
}
