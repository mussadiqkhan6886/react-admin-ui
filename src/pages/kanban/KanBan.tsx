import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import "../../styles/global.scss";
import "./kanban.scss";

function KanBan() {
    let data = [
  {
    Id: 101,
    Status: 'Open',
    Summary: 'Gather new feature requirements from product team.',
    Type: 'Task',
    Priority: 'High',
    Tags: 'Planning,Meeting',
    Estimate: 2,
    Assignee: 'Mussadiq Khan',
    RankId: 1
  },
  {
    Id: 102,
    Status: 'Open',
    Summary: 'Design wireframes for the dashboard analytics view.',
    Type: 'Design',
    Priority: 'Medium',
    Tags: 'UI/UX',
    Estimate: 4,
    Assignee: 'Sara Ali',
    RankId: 2
  },
  {
    Id: 103,
    Status: 'InProgress',
    Summary: 'Develop login authentication using JWT.',
    Type: 'Feature',
    Priority: 'Critical',
    Tags: 'Auth,Backend',
    Estimate: 5,
    Assignee: 'Ahmad Raza',
    RankId: 1
  },
  {
    Id: 104,
    Status: 'InProgress',
    Summary: 'Integrate user role-based access in admin panel.',
    Type: 'Feature',
    Priority: 'High',
    Tags: 'RBAC,Security',
    Estimate: 3,
    Assignee: 'Mussadiq Khan',
    RankId: 2
  },
  {
    Id: 105,
    Status: 'Testing',
    Summary: 'Test the responsiveness of the dashboard UI.',
    Type: 'Testing',
    Priority: 'Medium',
    Tags: 'Responsive,QA',
    Estimate: 2,
    Assignee: 'Zainab Tariq',
    RankId: 1
  },
  {
    Id: 106,
    Status: 'Close',
    Summary: 'Deploy version 1.0 to Netlify and GitHub Pages.',
    Type: 'Deployment',
    Priority: 'High',
    Tags: 'Release',
    Estimate: 1,
    Assignee: 'Mussadiq Khan',
    RankId: 1
  },
  {
    Id: 107,
    Status: 'Validate',
    Summary: 'Validate Redux integration with async thunks.',
    Type: 'Validation',
    Priority: 'Medium',
    Tags: 'Redux,RTK',
    Estimate: 2.5,
    Assignee: 'Farah Jameel',
    RankId: 1
  },
  {
    Id: 108,
    Status: 'InProgress',
    Summary: 'Fix dark mode toggle bug in theme switcher.',
    Type: 'Bug',
    Priority: 'High',
    Tags: 'UI,Theme',
    Estimate: 1.5,
    Assignee: 'Usman Iqbal',
    RankId: 3
  },
  {
    Id: 109,
    Status: 'Testing',
    Summary: 'Verify localStorage persistence for user sessions.',
    Type: 'Testing',
    Priority: 'Low',
    Tags: 'Storage,Auth',
    Estimate: 1,
    Assignee: 'Zainab Tariq',
    RankId: 2
  },
  {
    Id: 110,
    Status: 'Close',
    Summary: 'Document all API endpoints used in admin panel.',
    Type: 'Documentation',
    Priority: 'Low',
    Tags: 'Docs,API',
    Estimate: 3,
    Assignee: 'Mussadiq Khan',
    RankId: 1
  }
];

    return (
            <div className="App">
                <KanbanComponent id="kanban" keyField="Status" dataSource={data} cardSettings={{ contentField: "Summary", headerField: "Id" }}>
                    <ColumnsDirective>
                    <ColumnDirective headerText="To Do" keyField="Open"/>
                    <ColumnDirective headerText="In Progress" keyField="InProgress"/>
                    <ColumnDirective headerText="Testing" keyField="Testing"/>
                    <ColumnDirective headerText="Done" keyField="Close"/>
                    </ColumnsDirective>
                </KanbanComponent>
            </div>
          );
};
export default KanBan;