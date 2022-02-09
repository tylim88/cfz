import 'jest'
import cfz from './index'

describe('test cfz', () => {
	it('test output value', () => {
		function a(arg: number) {
			return arg === 1 ? 'hello' : 'world'
		}
		const b = (arg: string) => {
			return arg === 'hello'
		}
		const c = (arg: boolean) => {
			return arg ? 3 : 0
		}

		expect(cfz(a, b)(0)).toBe(false)

		expect(cfz(a, b, c)(1)).toBe(3)

		expect(cfz(a, b, c)(0)).toBe(0)
	})

	it('test typing', () => {
		expect(
			cfz(
				//@ts-expect-error
				(arg: string) => {
					return 1
				},
				(arg: boolean) => {
					return 'a'
				}
			)
		).not.toThrow()
		expect(
			cfz(
				//@ts-expect-error
				(arg: string) => {
					return 1
				},
				(arg: boolean) => {
					return 'a'
				}
			)
		).not.toThrow()
	})
})
