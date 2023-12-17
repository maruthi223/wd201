const todolist = require("../todo")

const {all,markAsComplete,add,overdue,
    dueToday,
    dueLater}=todolist()
describe('first test suite',()=>{
    beforeAll(()=>{
        add({
            title: "test todo1",
            completed: false,
            dueDate: new Date().toLocaleDateString('en-CA')
        });
        add({
            title: "test todo2",
            completed: false,
            dueDate: new Date().toLocaleDateString('en-CA')
        });
        add({
            title: "test todo3",
            completed: false,
            dueDate: new Date().toLocaleDateString('en-CA')
        });

    })
    test("should retrive overdue todo",()=>{
        const overduecount = overdue().length
        add({
            title: "test overduetodo",
            completed: false,
            dueDate: new Date().toLocaleDateString('en-CA'),
        });
        expect(overdue().length).toBe(overduecount)
    })
    test("should retrive today todo",()=>{
        const todaycount = dueToday().length
        add({
            title: "test todaytodo",
            completed: false,
            dueDate: new Date().toLocaleDateString('en-CA')
        });
        expect(dueToday().length).toBe(todaycount+1)
    })
    test("should retrive later todo",()=>{
        const latercount = dueLater().length
        add({
            title: "test latertodo",
            completed: false,
            dueDate: "2023-12-31",
        });
        expect(dueLater().length).toBe(latercount+1)
    })
    test('should be complete',()=>{
        expect(all[0].completed).toBe(false)
        markAsComplete(0)
        expect(all[0].completed).toBe(true)
    })
})