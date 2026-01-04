import { TestData } from '../types';

// Helper to generate dummy questions
const generatePart5 = (startId: number, count: number): any[] => {
  return Array.from({ length: count }, (_, i) => ({
    q_id: startId + i,
    question_text: `Sample Question ${startId + i}: The manager asks that everyone ------- the meeting on time.`,
    options: { "A": "attend", "B": "attends", "C": "attending", "D": "attended" },
    answer: "A",
    explanation: "Subjunctive mood requires the base form of the verb 'attend' after 'ask that'.",
    tag: "Grammar"
  }));
};

// Mock Data Store
export const MOCK_DATABASE: TestData[] = [
  // 2024 Data
  {
    metadata: { year: 2024, test_no: 1, series: "ETS TOEIC 2024" },
    content: {
      part_5: [
      
        {
          "q_id": 101,
          "question_text": "Former Sendai Company CEO Ken Nakata spoke about ------- career experiences.",
          "options": {"A": "he", "B": "his", "C": "him", "D": "himself"},
          "answer": "B",
          "explanation": "Cần tính từ sở hữu 'his' trước cụm danh từ 'career experiences'.",
          "tag": "Grammar"
        },
        {
          "q_id": 102,
          "question_text": "Passengers who will be taking a ------- domestic flight should go to Terminal A.",
          "options": {"A": "connectivity", "B": "connects", "C": "connect", "D": "connecting"},
          "answer": "D",
          "explanation": "Cụm danh từ: 'connecting flight' (chuyến bay nối chuyến).",
          "tag": "Vocabulary"
        },
        {
          "q_id": 103,
          "question_text": "Fresh and ------- apple-cider donuts are available at Oakcrest Orchard’s retail shop.",
          "options": {"A": "eaten", "B": "open", "C": "tasty", "D": "free"},
          "answer": "C",
          "explanation": "Chọn 'tasty' (ngon) để mô tả đồ ăn (donuts) cùng với 'fresh'.",
          "tag": "Vocabulary"
        },
        {
          "q_id": 104,
          "question_text": "Zahn Flooring has the widest selection of ------- in the United Kingdom.",
          "options": {"A": "paints", "B": "tiles", "C": "furniture", "D": "curtains"},
          "answer": "B",
          "explanation": "Công ty về sàn (Flooring) nên chọn 'tiles' (gạch lát).",
          "tag": "Vocabulary"
        },
        {
          "q_id": 105,
          "question_text": "One responsibility of the IT department is to ensure that the company is using ------- software.",
          "options": {"A": "update", "B": "updating", "C": "updates", "D": "updated"},
          "answer": "D",
          "explanation": "Dùng quá khứ phân từ 'updated' làm tính từ nghĩa là 'được cập nhật'.",
          "tag": "Grammar"
        },
        {
          "q_id": 106,
          "question_text": "It is wise to check a company’s dress code ------- visiting its head office.",
          "options": {"A": "so", "B": "how", "C": "like", "D": "before"},
          "answer": "D",
          "explanation": "Liên từ thời gian: 'before' (trước khi) phù hợp ngữ cảnh.",
          "tag": "Grammar"
        },
        {
          "q_id": 107,
          "question_text": "Wexler Store’s management team expects that employees will ------- support any new hires.",
          "options": {"A": "enthusiastically", "B": "enthusiasm", "C": "enthusiastic", "D": "enthused"},
          "answer": "A",
          "explanation": "Trạng từ 'enthusiastically' bổ nghĩa cho động từ 'support'.",
          "tag": "Grammar"
        },
        {
          "q_id": 108,
          "question_text": "Wheel alignments and brake system ------- are parts of our vehicle service plan.",
          "options": {"A": "inspects", "B": "inspector", "C": "inspected", "D": "inspections"},
          "answer": "D",
          "explanation": "Cần danh từ số nhiều 'inspections' để làm chủ ngữ song song với 'alignments'.",
          "tag": "Grammar"
        },
        {
          "q_id": 109,
          "question_text": "Registration for the Marketing Coalition Conference is now open ------- September 30.",
          "options": {"A": "until", "B": "into", "C": "yet", "D": "while"},
          "answer": "A",
          "explanation": "Giới từ 'until' chỉ thời hạn (cho đến ngày 30/9).",
          "tag": "Grammar"
        },
        {
          "q_id": 110,
          "question_text": "Growth in the home entertainment industry has been ------- this quarter.",
          "options": {"A": "separate", "B": "limited", "C": "willing", "D": "assorted"},
          "answer": "B",
          "explanation": "Dựa vào nghĩa: Sự tăng trưởng bị 'limited' (hạn chế).",
          "tag": "Vocabulary"
        },
        {
          "q_id": 111,
          "question_text": "Hawson Furniture will be making ------- on the east side of town on Thursday.",
          "options": {"A": "deliveries", "B": "delivered", "C": "deliver", "D": "deliverable"},
          "answer": "A",
          "explanation": "Cụm 'make deliveries' (thực hiện việc giao hàng).",
          "tag": "Grammar"
        },
        {
          "q_id": 112,
          "question_text": "The Marlton City Council does not have the authority to ------- parking on city streets.",
          "options": {"A": "drive", "B": "prohibit", "C": "bother", "D": "travel"},
          "answer": "B",
          "explanation": "Nghĩa phù hợp: 'prohibit' (cấm) đỗ xe.",
          "tag": "Vocabulary"
        },
        {
          "q_id": 113,
          "question_text": "Project Earth Group is ------- for ways to reduce greenhouse gas emissions.",
          "options": {"A": "looking", "B": "seeing", "C": "driving", "D": "leaning"},
          "answer": "A",
          "explanation": "Cụm 'look for' (tìm kiếm).",
          "tag": "Vocabulary"
        },
        {
          "q_id": 114,
          "question_text": "Our skilled tailors design a custom-made suit that fits your style and budget -------.",
          "options": {"A": "perfect", "B": "perfects", "C": "perfectly", "D": "perfection"},
          "answer": "C",
          "explanation": "Trạng từ 'perfectly' bổ nghĩa cho động từ 'fits'.",
          "tag": "Grammar"
        },
        {
          "q_id": 115,
          "question_text": "Project manager Hannah Chung has proved to be very ------- with completing company projects.",
          "options": {"A": "helpfulness", "B": "help", "C": "helpfully", "D": "helpful"},
          "answer": "D",
          "explanation": "Tính từ 'helpful' sau trạng từ 'very' và động từ 'be'.",
          "tag": "Grammar"
        },
        {
          "q_id": 116,
          "question_text": "Lehua Vacation Club members will receive double points ------- the month of August.",
          "options": {"A": "onto", "B": "above", "C": "during", "D": "between"},
          "answer": "C",
          "explanation": "Giới từ 'during' cộng khoảng thời gian (trong suốt tháng 8).",
          "tag": "Grammar"
        },
        {
          "q_id": 117,
          "question_text": "The costumes were not received ------- enough to be used in the first dress rehearsal.",
          "options": {"A": "far", "B": "very", "C": "almost", "D": "soon"},
          "answer": "D",
          "explanation": "Cụm 'soon enough' (đủ sớm).",
          "tag": "Vocabulary"
        },
        {
          "q_id": 118,
          "question_text": "Mr. Wu would excel in the role of event -------.",
          "options": {"A": "organized", "B": "organizer", "C": "organizes", "D": "organizational"},
          "answer": "B",
          "explanation": "Cần danh từ chỉ người 'organizer' (người tổ chức) cho vị trí công việc.",
          "tag": "Grammar"
        },
        {
          "q_id": 119,
          "question_text": "The northbound lane will be ------- closed because of the bridge project.",
          "options": {"A": "temporarily", "B": "competitively", "C": "recently", "D": "collectively"},
          "answer": "A",
          "explanation": "Nghĩa phù hợp: bị đóng cửa 'temporarily' (tạm thời).",
          "tag": "Vocabulary"
        },
        {
          "q_id": 120,
          "question_text": "Airline representatives handle issues, ------- missed connections to lost luggage.",
          "options": {"A": "from", "B": "under", "C": "on", "D": "against"},
          "answer": "A",
          "explanation": "Cấu trúc 'from A to B' (từ... đến...).",
          "tag": "Grammar"
        },
        {
          "q_id": 121,
          "question_text": "The meeting notes were ------- deleted, but Mr. Hahm recreated them.",
          "options": {"A": "accident", "B": "accidental", "C": "accidents", "D": "accidentally"},
          "answer": "D",
          "explanation": "Trạng từ 'accidentally' (vô tình) bổ nghĩa cho 'deleted'.",
          "tag": "Grammar"
        },
        {
          "q_id": 122,
          "question_text": "Predicts that the price of corn will rise 5 percent over the ------- year.",
          "options": {"A": "next", "B": "with", "C": "which", "D": "now"},
          "answer": "A",
          "explanation": "Cụm 'the next year' (năm tới).",
          "tag": "Vocabulary"
        },
        {
          "q_id": 123,
          "question_text": "Anyone who still ------- to take the fire safety training should do so.",
          "options": {"A": "needing", "B": "needs", "C": "has needed", "D": "were needing"},
          "answer": "B",
          "explanation": "Chủ ngữ 'Anyone' số ít, cần động từ 'needs' chia số ít.",
          "tag": "Grammar"
        },
        {
          "q_id": 124,
          "question_text": "Emerging technologies have ------- begun to transform the shipping industry.",
          "options": {"A": "already", "B": "exactly", "C": "hardly", "D": "closely"},
          "answer": "A",
          "explanation": "Trạng từ 'already' (đã rồi) đi với thì hiện tại hoàn thành.",
          "tag": "Grammar"
        },
        {
          "q_id": 125,
          "question_text": "The company handbook outlines the high ------- that employees are expected to meet.",
          "options": {"A": "experts", "B": "accounts", "C": "recommendations", "D": "standards"},
          "answer": "D",
          "explanation": "Cụm 'meet standards' (đáp ứng các tiêu chuẩn).",
          "tag": "Vocabulary"
        },
        {
          "q_id": 126,
          "question_text": "Because ------- of the board members have scheduling conflicts, the meeting will be moved.",
          "options": {"A": "any", "B": "everybody", "C": "those", "D": "some"},
          "answer": "D",
          "explanation": "Nghĩa phù hợp: 'some of' (một vài thành viên).",
          "tag": "Grammar"
        },
        {
          "q_id": 127,
          "question_text": "The project ------- the collaboration of several teams across the company.",
          "options": {"A": "passed", "B": "decided", "C": "required", "D": "performed"},
          "answer": "C",
          "explanation": "Nghĩa phù hợp: 'required' (yêu cầu/đòi hỏi).",
          "tag": "Vocabulary"
        },
        {
          "q_id": 128,
          "question_text": "We cannot send the booklet to the printers until it ------- by Ms. Jeon.",
          "options": {"A": "is approving", "B": "approves", "C": "has been approved", "D": "will be approved"},
          "answer": "C",
          "explanation": "Bị động thì hiện tại hoàn thành sau 'until'.",
          "tag": "Grammar"
        },
        {
          "q_id": 129,
          "question_text": "------- the closure of Verdigold Transport Services, we are looking for a new company.",
          "options": {"A": "In spite of", "B": "Just as", "C": "In light of", "D": "According to"},
          "answer": "C",
          "explanation": "Cụm 'In light of' (bởi vì/xét theo).",
          "tag": "Vocabulary"
        },
        {
          "q_id": 130,
          "question_text": "The ------- information provided by Uniss Bank’s brochure helps applicants.",
          "options": {"A": "arbitrary", "B": "supplemental", "C": "superfluous", "D": "potential"},
          "answer": "B",
          "explanation": "Tính từ 'supplemental' (bổ sung) phù hợp ngữ cảnh thông tin.",
          "tag": "Vocabulary"
        }
      ],
      part_6: [
        {
          "group_id": "P6_G01",
          "passage": "Come to the Maxley Heights Center for Horticulture and learn how to create a beautiful, eco-friendly garden for your home or business. ------- (131).We will teach you how to plant a rain garden, which is simply a shallow sunken garden ------- (132) a special soil mix to filter pollutants from rainwater flowing from nearby roads and rooftops. These gardens can be landscaped with native plants and flowers. ------- (133), rain gardens are always beneficial to the local environment. Among other things, ------- (134) improve drainage and protect rivers and streams.To register, visit www.maxley-horticulture.org.",
          "questions": [
            {
              "q_id": 131,
              "options": {"A": "Children... exhibits.", "B": "Learn... region.", "C": "Build... materials.", "D": "Next Saturday... workshop."},
              "answer": "D",
              "explanation": "Chọn câu giới thiệu workshop phù hợp lời mời học làm vườn.",
              "tag": "Sentence Insertion"
            },
            {
              "q_id": 132,
              "options": {"A": "to use", "B": "used to", "C": "by using", "D": "that uses"},
              "answer": "D",
              "explanation": "Mệnh đề quan hệ 'that uses' bổ nghĩa cho 'garden'.",
              "tag": "Grammar"
            },
            {
              "q_id": 133,
              "options": {"A": "Best of all", "B": "For example", "C": "In any event", "D": "As a matter of fact"},
              "answer": "A",
              "explanation": "'Best of all' dùng để nêu ưu điểm nổi bật nhất.",
              "tag": "Transitions"
            },
            {
              "q_id": 134,
              "options": {"A": "we", "B": "they", "C": "both", "D": "yours"},
              "answer": "B",
              "explanation": "'they' thay thế cho số nhiều 'rain gardens'.",
              "tag": "Grammar"
            }
          ]
        },
        {
          "group_id": "P6_G02",
          "passage": "Dear Mr. Dombo,Thank you for your ------- (135) support in helping me to plan the opening gala for Tokyo’s fashion week. The event was a huge success, and I was honored to work with you. I know that our attendees follow your work closely, and they loved the designs you contributed for this event.Your designs received a lot of ------- (136) on social media. Shows like this will keep Tokyo on the map as a premier fashion centre. ------- (137). I realize that the multiple delays made the planning no easy task. The auction ------- (138) our Young Designers Award program is coming up soon and I look forward to working with you on that as well.Sincerely,Asahi Ishioka",
          "questions": [
            {
              "q_id": 135,
              "options": {"A": "amazed", "B": "amazement", "C": "amazing", "D": "amazingly"},
              "answer": "C",
              "explanation": "Tính từ 'amazing' bổ nghĩa cho 'support'.",
              "tag": "Grammar"
            },
            {
              "q_id": 136,
              "options": {"A": "attention", "B": "proposals", "C": "innovation", "D": "criticism"},
              "answer": "A",
              "explanation": "'Receive attention' (nhận được sự chú ý).",
              "tag": "Vocabulary"
            },
            {
              "q_id": 137,
              "options": {"A": "Events went well.", "B": "Thank you for flexibility.", "C": "Stop by office.", "D": "Tourism destination."},
              "answer": "B",
              "explanation": "Phù hợp với câu sau nói về 'multiple delays'.",
              "tag": "Sentence Insertion"
            },
            {
              "q_id": 138,
              "options": {"A": "will benefit", "B": "to benefit", "C": "has benefited", "D": "benefits"},
              "answer": "B",
              "explanation": "Dùng 'to benefit' chỉ mục đích của buổi đấu giá.",
              "tag": "Grammar"
            }
          ]
        },
        {
          "group_id": "P6_G03",
          "passage": `To: Edgar Hughes
            Subject: Card expiration date approaching
            Dear Mr. Hughes,

            Please be advised that your Mena Chin Library card will expire one month from today.
            ------- (139) must be renewed if you intend to keep your membership for the coming year. ------- (140). This can be done at the information desk at any branch location.

            ------- (141) you decide to close your account, no action is necessary. Failure to complete your renewal by the ------- (142) date will result in the expiration of your library privileges.

            If you have any questions about this notice, please reply to this e-mail.`,
          "questions": [
            {
              "q_id": 139,
              "options": {"A": "It", "B": "You", "C": "Our", "D": "Each"},
              "answer": "A",
              "explanation": "'It' thay thế cho 'your card'.",
              "tag": "Grammar"
            },
            {
              "q_id": 140,
              "options": {"A": "Sign up card.", "B": "Visit website.", "C": "Complete one week before.", "D": "Opt out any time."},
              "answer": "C",
              "explanation": "Cung cấp quy định về thời gian gia hạn.",
              "tag": "Sentence Insertion"
            },
            {
              "q_id": 141,
              "options": {"A": "Also", "B": "Should", "C": "Because", "D": "Although"},
              "answer": "B",
              "explanation": "Đảo ngữ câu điều kiện loại 1: 'Should you decide' = 'If you decide'.",
              "tag": "Grammar"
            },
            {
              "q_id": 142,
              "options": {"A": "specifically", "B": "specifics", "C": "specified", "D": "specificity"},
              "answer": "C",
              "explanation": "Tính từ 'specified' (đã được chỉ định/ghi rõ).",
              "tag": "Grammar"
            }
          ]
        },
        {
          "group_id": "P6_G04",
          "passage": `Dear Ms. Burwell,
I am Omar Ridha, the manager of Droplight Studio. ------- (143).
We offer a full range of photography services for real estate professionals like you. We take pride in composing interior and exterior shots that make a property look its best. Droplight Studio spares no effort in ------- (144) superior digital images. ------- (145), our professional-grade equipment, lighting, and staging techniques allow us to highlight the best features of a property. And once the photo shoot is over, every image ------- (146) expert editing. All these services come standard in every package.
Please visit our Web site to view our work as well as our pricing and scheduling information.
`,
          "questions": [
            {
              "q_id": 143,
              "options": {"A": "Introduce business.", "B": "Great photos.", "C": "Looking forward.", "D": "First studio."},
              "answer": "A",
              "explanation": "Câu mở đầu giới thiệu doanh nghiệp.",
              "tag": "Sentence Insertion"
            },
            {
              "q_id": 144,
              "options": {"A": "researching", "B": "creating", "C": "purchasing", "D": "displaying"},
              "answer": "B",
              "explanation": "Hãng phim/ảnh nỗ lực 'creating' (tạo ra) hình ảnh.",
              "tag": "Vocabulary"
            },
            {
              "q_id": 145,
              "options": {"A": "If not", "B": "By comparison", "C": "Otherwise", "D": "Indeed"},
              "answer": "D",
              "explanation": "'Indeed' (thực vậy) dùng để nhấn mạnh thêm ý trước.",
              "tag": "Transitions"
            },
            {
              "q_id": 146,
              "options": {"A": "receives", "B": "is receiving", "C": "had received", "D": "had to receive"},
              "answer": "A",
              "explanation": "Thì hiện tại đơn diễn tả một quy trình hiển nhiên.",
              "tag": "Grammar"
            }
          ]
        }
      ],
      part_7: [
        {
          group_id: "P7_G1",
          passage_type: "Double Passage",
          passages: [
            "EMAIL\nTo: customer@email.com\nFrom: support@store.com\nSubject: Order #12345\n\nDear Customer,\nYour order has been shipped. Please allow 3-5 business days for delivery.",
            "REVIEW\nRated: 5 Stars\nI received my package very quickly! The item was exactly as described."
          ],
          questions: [
            {
              q_id: 147,
              question_text: "What does the customer imply in the review?",
              options: { "A": "The delivery was late", "B": "The item was broken", "C": "The shipping was fast", "D": "The price was high" },
              answer: "C",
              explanation: "Khách hàng nói 'received my package very quickly', suy ra shipping was fast.",
              tag: "Inference"
            }
          ]
        }
      ]
    }
  },
  {
    metadata: { year: 2024, test_no: 2, series: "ETS TOEIC 2024" },
    content: {
     part_5: [
  {
    q_id: 101,
    question_text: "Before operating your handheld device, please ------- the enclosed cable to charge it.",
    options: { A: "plan", B: "remain", C: "use", D: "finish" },
    answer: "C",
    explanation: "Dùng động từ 'use' (sử dụng) phù hợp với ngữ cảnh sử dụng dây cáp để sạc.",
    tag: "Vocabulary"
  },
  {
    q_id: 102,
    question_text: "Safile’s new external hard drive can ------- store up to one terabyte of data.",
    options: { A: "secure", B: "security", C: "securely", D: "secured" },
    answer: "C",
    explanation: "Cần trạng từ 'securely' (một cách an toàn) để bổ nghĩa cho động từ 'store'.",
    tag: "Grammar"
  },
  {
    q_id: 103,
    question_text: "Mr. Peterson will travel ------- the Tokyo office for the annual meeting.",
    options: { A: "to", B: "through", C: "in", D: "over" },
    answer: "A",
    explanation: "Cấu trúc 'travel to + địa điểm' (đi đến đâu đó).",
    tag: "Grammar"
  },
  {
    q_id: 104,
    question_text: "Yong-Soo Cosmetics will not charge for items on back order until ------- have left our warehouse.",
    options: { A: "them", B: "they", C: "themselves", D: "their" },
    answer: "B",
    explanation: "Cần đại từ chủ ngữ 'they' để thay thế cho danh từ 'items'.",
    tag: "Grammar"
  },
  {
    q_id: 105,
    question_text: "Our premium day tour takes visitors to historic sites ------- the Aprico River.",
    options: { A: "onto", B: "since", C: "inside", D: "along" },
    answer: "D",
    explanation: "Giới từ 'along' (dọc theo) phù hợp khi nói về địa điểm bên cạnh dòng sông.",
    tag: "Vocabulary"
  },
  {
    q_id: 106,
    question_text: "Eighty percent of drivers surveyed said they would consider buying a vehicle that runs on -------.",
    options: { A: "electricity", B: "electrically", C: "electricians", D: "electrify" },
    answer: "A",
    explanation: "Cần danh từ 'electricity' (điện) đứng sau giới từ 'on'.",
    tag: "Grammar"
  },
  {
    q_id: 107,
    question_text: "Xinzhe Zu has ------- Petrin Engineering as the vice president of operations.",
    options: { A: "attached", B: "resigned", C: "joined", D: "combined" },
    answer: "C",
    explanation: "Động từ 'joined' (gia nhập) phù hợp với việc đảm nhận vị trí phó chủ tịch.",
    tag: "Vocabulary"
  },
  {
    q_id: 108,
    question_text: "Next month, Barder House Books will be holding ------- third author’s hour in Cleveland.",
    options: { A: "it", B: "itself", C: "its own", D: "its" },
    answer: "D",
    explanation: "Dùng tính từ sở hữu 'its' để thay thế cho 'Barder House Books'.",
    tag: "Grammar"
  },
  {
    q_id: 109,
    question_text: "Chester’s Tiles ------- expanded to a second location in Turnington.",
    options: { A: "severely", B: "usually", C: "recently", D: "exactly" },
    answer: "C",
    explanation: "Trạng từ 'recently' (gần đây) thường dùng với thì hiện tại hoàn thành.",
    tag: "Vocabulary"
  },
  {
    q_id: 110,
    question_text: "Tabrino’s has ------- increased the number of almonds in the Nut Medley snack pack.",
    options: { A: "significant", B: "significance", C: "signifies", D: "significantly" },
    answer: "D",
    explanation: "Cần trạng từ 'significantly' để bổ nghĩa cho động từ 'increased'.",
    tag: "Grammar"
  },
  {
    q_id: 111,
    question_text: "------- she travels, Jacintha Flores collects samples of local fabrics and patterns.",
    options: { A: "Wherever", B: "In addition to", C: "Either", D: "In contrast to" },
    answer: "A",
    explanation: "Liên từ 'Wherever' (bất cứ nơi nào) chỉ địa điểm.",
    tag: "Grammar"
  },
  {
    q_id: 112,
    question_text: "Most picture ------- at Glowing Photo Lab go on sale at 3:00 P.M. today.",
    options: { A: "framer", B: "framing", C: "framed", D: "frames" },
    answer: "D",
    explanation: "Cụm danh từ 'picture frames' (khung tranh).",
    tag: "Vocabulary"
  },
  {
    q_id: 113,
    question_text: "All students in the business management class hold ------- college degrees.",
    options: { A: "late", B: "developed", C: "advanced", D: "elated" },
    answer: "C",
    explanation: "Cụm 'advanced degrees' (bằng cấp cao).",
    tag: "Vocabulary"
  },
  {
    q_id: 114,
    question_text: "We hired Noah Wan of Shengyao Accounting Ltd. ------- our company’s financial assets.",
    options: { A: "to evaluate", B: "to be evaluated", C: "will be evaluated", D: "evaluate" },
    answer: "A",
    explanation: "Dùng 'to + V' để chỉ mục đích của việc thuê nhân sự.",
    tag: "Grammar"
  },
  {
    q_id: 115,
    question_text: "Ms. Charisse is taking on a new account ------- she finishes the Morrison project.",
    options: { A: "with", B: "going", C: "after", D: "between" },
    answer: "C",
    explanation: "Liên từ 'after' (sau khi) chỉ trình tự thời gian.",
    tag: "Grammar"
  },
  {
    q_id: 116,
    question_text: "Cormet Motors’ profits are ------- this year than last year.",
    options: { A: "higher", B: "high", C: "highly", D: "highest" },
    answer: "A",
    explanation: "Dấu hiệu 'than' yêu cầu tính từ so sánh hơn 'higher'.",
    tag: "Grammar"
  },
  {
    q_id: 117,
    question_text: "In its ------- advertising campaign, Jaymor Tools demonstrates how reliable its products are.",
    options: { A: "current", B: "relative", C: "spacious", D: "collected" },
    answer: "A",
    explanation: "Tính từ 'current' (hiện tại) phù hợp để mô tả chiến dịch quảng cáo.",
    tag: "Vocabulary"
  },
  {
    q_id: 118,
    question_text: "Remember to submit receipts for reimbursement ------- returning from a business trip.",
    options: { A: "such as", B: "when", C: "then", D: "within" },
    answer: "B",
    explanation: "Liên từ 'when' chỉ thời điểm hành động xảy ra.",
    tag: "Grammar"
  },
  {
    q_id: 119,
    question_text: "Patrons will be able to access Westside Library’s ------- acquired collection of books on Tuesday.",
    options: { A: "instantly", B: "newly", C: "early", D: "naturally" },
    answer: "B",
    explanation: "Trạng từ 'newly' (mới được) bổ nghĩa cho phân từ 'acquired'.",
    tag: "Vocabulary"
  },
  {
    q_id: 120,
    question_text: "Please ------- any questions about time sheets to Tabitha Jones in the payroll department.",
    options: { A: "direction", B: "directive", C: "directed", D: "direct" },
    answer: "D",
    explanation: "Động từ 'direct' mang nghĩa chuyển hướng hoặc gửi câu hỏi đến ai.",
    tag: "Vocabulary"
  },
  {
    q_id: 121,
    question_text: "Before signing a delivery -------, be sure to double-check that all the items ordered are in the shipment.",
    options: { A: "decision", B: "announcement", C: "receipt", D: "limit" },
    answer: "C",
    explanation: "Cụm 'delivery receipt' (biên nhận giao hàng).",
    tag: "Vocabulary"
  },
  {
    q_id: 122,
    question_text: "Funds have been added to the budget for expenses ------- with the new building.",
    options: { A: "associated", B: "association", C: "associate", D: "associates" },
    answer: "A",
    explanation: "Cụm 'associated with' (liên quan đến/gắn liền với).",
    tag: "Grammar"
  },
  {
    q_id: 123,
    question_text: "Ms. Bernard ------- that a deadline was approaching, so she requested some assistance.",
    options: { A: "noticed", B: "obscured", C: "withdrew", D: "appeared" },
    answer: "A",
    explanation: "Động từ 'noticed' (nhận thấy) phù hợp với ngữ cảnh nhận ra thời hạn sắp tới.",
    tag: "Vocabulary"
  },
  {
    q_id: 124,
    question_text: "Mr. Moscowitz is ------- that Dr. Tanaka will agree to present the keynote speech at this year’s conference.",
    options: { A: "hopes", B: "hoped", C: "hopeful", D: "hopefully" },
    answer: "C",
    explanation: "Cần tính từ 'hopeful' (đầy hy vọng) sau động từ 'be'.",
    tag: "Grammar"
  },
  {
    q_id: 125,
    question_text: "Two Australian companies are developing new smartphones, but it is unclear ------- phone will become available first.",
    options: { A: "if", B: "which", C: "before", D: "because" },
    answer: "B",
    explanation: "Dùng 'which' để chỉ sự lựa chọn giữa các đối tượng đã được nhắc đến.",
    tag: "Grammar"
  },
  {
    q_id: 126,
    question_text: "Corners Gym offers its members a free lesson in how to use ------- properly.",
    options: { A: "weighs", B: "weights", C: "weighty", D: "weighed" },
    answer: "B",
    explanation: "Danh từ 'weights' (tạ/dụng cụ tập tạ).",
    tag: "Vocabulary"
  },
  {
    q_id: 127,
    question_text: "------- the rules, overnight parking is not permitted at the clubhouse facility.",
    options: { A: "Prior to", B: "Except for", C: "Instead of", D: "According to" },
    answer: "D",
    explanation: "Cụm 'According to' (Theo như quy định).",
    tag: "Vocabulary"
  },
  {
    q_id: 128,
    question_text: "Once everyone -------, we can begin the conference call.",
    options: { A: "arrived", B: "is arriving", C: "to arrive", D: "has arrived" },
    answer: "D",
    explanation: "Thì hiện tại hoàn thành 'has arrived' dùng sau 'once' để chỉ hành động hoàn tất trước hành động khác.",
    tag: "Grammar"
  },
  {
    q_id: 129,
    question_text: "Each summer a motivational video that highlights the past year’s ------- is shown to all company employees.",
    options: { A: "preferences", B: "accomplishments", C: "communications", D: "uncertainties" },
    answer: "B",
    explanation: "Danh từ 'accomplishments' (thành tựu/thành quả).",
    tag: "Vocabulary"
  },
  {
    q_id: 130,
    question_text: "Employees who wish to attend the retirement dinner ------- Ms. Howell’s 30 years of service should contact Mr. Lee.",
    options: { A: "honor", B: "to honor", C: "will honor", D: "will be honored" },
    answer: "B",
    explanation: "Dùng 'to + V' (để vinh danh) bổ nghĩa cho mục đích của bữa tiệc.",
    tag: "Grammar"
  }
],
      part_6: [
  {
    group_id: "P6_G01",
    passage: `To: Myung-Hee Hahn
From: Dellwyn Home Store
Subject: Order update
Dear Ms. Hahn,
Your ------- (131) order of a red oak dining table and six matching chairs arrived at our store this morning. We would now like to arrange for the delivery of the ------- (132). Please call us at 517-555-0188 and ask ------- (133) to Coleman Cobb, our delivery manager. ------- (134).
Customer Service, Dellwyn Home Store`,
    questions: [
      { q_id: 131, options: { A: "specially", B: "specialize", C: "special", D: "specializing" }, answer: "C", explanation: "Tính từ 'special' bổ nghĩa cho danh từ 'order'.", tag: "Grammar" },
      { q_id: 132, options: { A: "furniture", B: "appliances", C: "refund", D: "tools" }, answer: "A", explanation: "Danh từ 'furniture' (nội thất) bao quát bàn ghế đã nêu ở đầu.", tag: "Vocabulary" },
      { q_id: 133, options: { A: "speak", B: "spoken", C: "is speaking", D: "to speak" }, answer: "D", explanation: "Cấu trúc 'ask + to V'.", tag: "Grammar" },
      { q_id: 134, options: { A: "He can schedule a convenient time.", B: "He began working here yesterday.", C: "He can meet you at 11:00 A.M.", D: "He recently moved to Dellwyn." }, answer: "A", explanation: "Câu này phù hợp với vai trò của người quản lý giao hàng đang sắp xếp lịch.", tag: "Context" }
    ]
  },
  {
    group_id: "P6_G02",
    passage: `Keep Cool Service Contractors can bring you peace of mind.
As part of an annual contract, we will service your air-conditioning system, ensuring your ------- (135) and comfort. This includes inspecting the system, making repairs as needed, and professionally cleaning your air ducts. ------- (136), if necessary, we can replace your old air-conditioning system with a new, cost-efficient one.
Our workers are highly qualified licensed technicians who stay up-to-date with ongoing training. ------- (137). We promise you fair prices and professional work, ------- (138) by our Keep Cool guarantee. Call 1-868-555-0129 for a free quote today.`,
    questions: [
      { q_id: 135, options: { A: "safe", B: "safely", C: "safest", D: "safety" }, answer: "D", explanation: "Cần danh từ 'safety' đi cùng danh từ 'comfort'.", tag: "Grammar" },
      { q_id: 136, options: { A: "On one hand", B: "Nonetheless", C: "Furthermore", D: "And yet" }, answer: "C", explanation: "Liên từ 'Furthermore' dùng để bổ sung thêm một dịch vụ khác.", tag: "Transitions" },
      { q_id: 137, options: { A: "Take advantage of dozens of useful online tools.", B: "Moreover, the air conditioner you chose is very popular.", C: "Plus, they are friendly, clean, and knowledgeable.", D: "Thank you for visiting our contractor showroom." }, answer: "C", explanation: "Câu này tiếp tục mô tả tích cực về thợ kỹ thuật ('they').", tag: "Context" },
      { q_id: 138, options: { A: "backed", B: "backs", C: "backing", D: "back" }, answer: "A", explanation: "Cấu trúc rút gọn bị động 'backed by' (được đảm bảo bởi).", tag: "Grammar" }
    ]
  },
  {
    group_id: "P6_G03",
    passage: `Dear Light Idea Customers,
Light Idea is enacting a price increase on select energy-efficient products, effective April 17.
Specific product pricing will ------- (139). Please contact your sales representative for details and questions.
The last date for ordering at current prices is April 16. All orders ------- (140) after this date will follow the new price list. ------- (141). Customers will be able to find this on our Web site.
We will continue to provide quality products and ------- (142) service to our valued customers. Thank you for your business.`,
    questions: [
      { q_id: 139, options: { A: "agree", B: "vary", C: "wait", D: "decline" }, answer: "B", explanation: "Động từ 'vary' (khác nhau/thay đổi tùy sản phẩm).", tag: "Vocabulary" },
      { q_id: 140, options: { A: "receiving", B: "having received", C: "received", D: "will be received" }, answer: "C", explanation: "Rút gọn mệnh đề quan hệ dạng bị động cho 'orders'.", tag: "Grammar" },
      { q_id: 141, options: { A: "The updated price list will be available on March 20.", B: "We apologize for this inconvenience.", C: "Your orders will be shipped after April 17.", D: "We are increasing prices because of rising costs." }, answer: "A", explanation: "Kết nối logic với câu sau về việc tìm thấy danh sách trên website.", tag: "Context" },
      { q_id: 142, options: { A: "exceptionally", B: "exception", C: "exceptional", D: "exceptionalism" }, answer: "C", explanation: "Tính từ 'exceptional' (xuất sắc) bổ nghĩa cho danh từ 'service'.", tag: "Grammar" }
    ]
  },
  {
    group_id: "P6_G04",
    passage: `Dear Jang-Ho,
Thank you for the shipment last month of 80 units of your jewelry pieces. I am happy to report that they have been selling very well in my shop. My ------- (143) love the colorful designs as well as the quality of your workmanship. ------- (144).
I would like to increase the number of units I order from you. Would you be able to ------- (145) my order for the September shipment?
Finally, I would like to discuss the possibility of featuring your work exclusively in my store. I believe that I could reach your target audience best and that the agreement would serve ------- (146) both very well. I look forward to hearing from you.`,
    questions: [
      { q_id: 143, options: { A: "patients", B: "students", C: "customers", D: "teammates" }, answer: "C", explanation: "Khách hàng (customers) mua trang sức tại cửa hàng.", tag: "Vocabulary" },
      { q_id: 144, options: { A: "If you need more time, please let me know.", B: "Unfortunately, I do not have adequate shelf space at this time.", C: "I would like to show you some of my own designs.", D: "The reasonable prices also make your pieces a great value." }, answer: "D", explanation: "Bổ sung thêm một ưu điểm khác (giá cả) bên cạnh thiết kế và chất lượng.", tag: "Context" },
      { q_id: 145, options: { A: "include", B: "double", C: "repeat", D: "insure" }, answer: "B", explanation: "Dùng 'double' (gấp đôi) để tăng số lượng đơn hàng.", tag: "Vocabulary" },
      { q_id: 146, options: { A: "us", B: "you", C: "we", D: "these" }, answer: "A", explanation: "Tân ngữ 'us' (chúng ta) cho cả hai bên trong thỏa thuận.", tag: "Grammar" }
    ]
  }
],
      part_7: []
    }
  },
    {
    metadata: { year: 2024, test_no: 3, series: "ETS TOEIC 2024" },
    content: {
      
  part_5: [
    {
      q_id: 101,
      question_text: "------- your order is being processed, please call customer service with any questions.",
      options: { A: "Still", B: "Either", C: "While", D: "Also" },
      answer: "C",
      explanation: "Liên từ 'While' chỉ hai hành động diễn ra song song.",
      tag: "Grammar"
    },
    {
      q_id: 102,
      question_text: "ABC Truck Supplies has the ------- selection of mufflers in the state.",
      options: { A: "natural", B: "widest", C: "overall", D: "positive" },
      answer: "B",
      explanation: "So sánh nhất 'the widest' (rộng nhất/đa dạng nhất).",
      tag: "Grammar"
    },
    {
      q_id: 103,
      question_text: "Sharswood Landscaping has received dozens of five-star ------- for its work.",
      options: { A: "reviews", B: "reviewer", C: "reviewed", D: "reviewing" },
      answer: "A",
      explanation: "Danh từ số nhiều 'reviews' đứng sau 'dozens of'.",
      tag: "Grammar"
    },
    {
      q_id: 104,
      question_text: "Dr. Cho will visit the Teledarr Lab during the annual open house, since ------- may not have another chance to see it.",
      options: { A: "hers", B: "she", C: "her", D: "herself" },
      answer: "B",
      explanation: "Đại từ chủ ngữ 'she' thay thế cho Dr. Cho.",
      tag: "Grammar"
    },
    {
      q_id: 105,
      question_text: "Dorn Department Store decided to ------- its already large selection of housewares.",
      options: { A: "create", B: "enforce", C: "apply", D: "expand" },
      answer: "D",
      explanation: "Động từ 'expand' (mở rộng) quy mô lựa chọn hàng hóa.",
      tag: "Vocabulary"
    },
    {
      q_id: 106,
      question_text: "We ------- that you bring a portfolio of work samples to the interview.",
      options: { A: "was asking", B: "having asked", C: "ask", D: "asks" },
      answer: "C",
      explanation: "Chia động từ hiện tại đơn 'ask' theo chủ ngữ 'We'.",
      tag: "Grammar"
    },
    {
      q_id: 107,
      question_text: "Members of the Bold Stone Farm Store receive ------- discounts on all purchases.",
      options: { A: "depth", B: "deepen", C: "deep", D: "deeply" },
      answer: "C",
      explanation: "Tính từ 'deep' bổ nghĩa cho 'discounts' (giảm giá sâu).",
      tag: "Vocabulary"
    },
    {
      q_id: 108,
      question_text: "If your plans change, please contact us at least -------.",
      options: { A: "A", B: "B", C: "C", D: "D" },
      answer: "B",
      explanation: "Căn cứ theo bảng đáp án chính thức.",
      tag: "Unknown"
    },
    {
      q_id: 109,
      question_text: "Hold the tomato seedling gently by the stem in order to avoid harming ------- roots.",
      options: { A: "its", B: "at", C: "that", D: "in" },
      answer: "A",
      explanation: "Tính từ sở hữu 'its' thay cho 'the seedling'.",
      tag: "Grammar"
    },
    {
      q_id: 110,
      question_text: "At the registration table, be sure to collect your name tag ------- entering the conference.",
      options: { A: "very", B: "often", C: "always", D: "before" },
      answer: "D",
      explanation: "Giới từ 'before' (trước khi) phù hợp trình tự thời gian.",
      tag: "Grammar"
    },
    {
      q_id: 111,
      question_text: "Maihama vehicles include an extended ------- to cover engine repairs.",
      options: { A: "record", B: "operation", C: "budget", D: "warranty" },
      answer: "D",
      explanation: "Cụm 'extended warranty' (gia hạn bảo hành).",
      tag: "Vocabulary"
    },
    {
      q_id: 112,
      question_text: "The hotel’s new Web site features an ------- collection of high-quality images.",
      options: { A: "absolute", B: "efficient", C: "impressive", D: "undefeated" },
      answer: "C",
      explanation: "Tính từ 'impressive' (ấn tượng) mô tả bộ sưu tập ảnh.",
      tag: "Vocabulary"
    },
    {
      q_id: 113,
      question_text: "On behalf of everyone at Uniontown Bank, we ------- thank you for your continued patronage.",
      options: { A: "deservedly", B: "commonly", C: "sincerely", D: "perfectly" },
      answer: "C",
      explanation: "Trạng từ 'sincerely' (chân thành) thường đi kèm lời cảm ơn.",
      tag: "Vocabulary"
    },
    {
      q_id: 114,
      question_text: "Fragile equipment must be stored in a secure location so that nothing is ------- damaged.",
      options: { A: "accident", B: "accidents", C: "accidental", D: "accidentally" },
      answer: "D",
      explanation: "Trạng từ 'accidentally' (vô tình) bổ nghĩa cho 'damaged'.",
      tag: "Grammar"
    },
    {
      q_id: 115,
      question_text: "Ms. Sampson will not arrive at the convention ------- after our team’s presentation.",
      options: { A: "until", B: "lately", C: "from", D: "when" },
      answer: "A",
      explanation: "Cấu trúc 'not... until' (không cho đến khi).",
      tag: "Grammar"
    },
    {
      q_id: 116,
      question_text: "The community picnic will be held ------- the park behind the Seltzer Public Library.",
      options: { A: "in", B: "all", C: "for", D: "here" },
      answer: "A",
      explanation: "Giới từ 'in' chỉ vị trí tại địa điểm công cộng.",
      tag: "Grammar"
    },
    {
      q_id: 117,
      question_text: "The new hires ------- for an orientation on May 10 at 9:00 A.M.",
      options: { A: "to be gathering", B: "will gather", C: "gathering", D: "to gather" },
      answer: "B",
      explanation: "Thì tương lai đơn 'will gather' diễn tả sự việc sắp tới.",
      tag: "Grammar"
    },
    {
      q_id: 118,
      question_text: "When Mr. Young approached the desk, the receptionist ------- offered him a seat in the waiting room.",
      options: { A: "politely", B: "polite", C: "politeness", D: "politest" },
      answer: "A",
      explanation: "Trạng từ 'politely' (lịch sự) bổ nghĩa cho hành động 'offered'.",
      tag: "Grammar"
    },
    {
      q_id: 119,
      question_text: "Members of the Marvale marketing team claimed that ------- was the best design for the new corporate logo.",
      options: { A: "they", B: "them", C: "theirs", D: "their" },
      answer: "C",
      explanation: "Đại từ sở hữu 'theirs' làm chủ ngữ thay cho 'their design'.",
      tag: "Grammar"
    },
    {
      q_id: 120,
      question_text: "The new Kitsuna video camera is currently on sale for $375, not ------- tax.",
      options: { A: "excepting", B: "alongside", C: "within", D: "including" },
      answer: "D",
      explanation: "Cụm 'including tax' (bao gồm thuế).",
      tag: "Vocabulary"
    },
    {
      q_id: 121,
      question_text: "All associates are ------- to follow the standard operating procedures outlined in the handbook.",
      options: { A: "concerned", B: "tended", C: "maintained", D: "expected" },
      answer: "D",
      explanation: "Cấu trúc 'be expected to' (được yêu cầu/mong đợi).",
      tag: "Grammar"
    },
    {
      q_id: 122,
      question_text: "This month Framley Publishing House is embarking on its ------- expansion so far.",
      options: { A: "ambitiously", B: "most ambitiously", C: "ambition", D: "most ambitious" },
      answer: "D",
      explanation: "So sánh nhất 'most ambitious' (tham vọng nhất).",
      tag: "Grammar"
    },
    {
      q_id: 123,
      question_text: "After months of collaboration, Matricks Technology’s software developers ------- released a top-quality product.",
      options: { A: "profoundly", B: "overly", C: "finally", D: "intensely" },
      answer: "C",
      explanation: "Trạng từ 'finally' (cuối cùng) chỉ kết quả sau quá trình dài.",
      tag: "Vocabulary"
    },
    {
      q_id: 124,
      question_text: "Tickets are valid for one-time access and do not allow for ------- into the venue.",
      options: { A: "duplication", B: "reentry", C: "permission", D: "turnover" },
      answer: "B",
      explanation: "Danh từ 'reentry' (vào lại).",
      tag: "Vocabulary"
    },
    {
      q_id: 125,
      question_text: "We hired Okafor Construction to do the renovation ------- it was not the lowest bidder on the project.",
      options: { A: "if only", B: "alternatively", C: "whereas", D: "even though" },
      answer: "D",
      explanation: "Liên từ nhượng bộ 'even though' (mặc dù).",
      tag: "Grammar"
    },
    {
      q_id: 126,
      question_text: "The first ------- of the training will introduce staff to certain workplace responsibilities.",
      options: { A: "part", B: "parted", C: "parting", D: "partial" },
      answer: "A",
      explanation: "Danh từ 'part' (phần/giai đoạn).",
      tag: "Vocabulary"
    },
    {
      q_id: 127,
      question_text: "According to industry -------, Ghira Company plans to relocate its headquarters to Australia.",
      options: { A: "reported", B: "reportedly", C: "reporter", D: "reports" },
      answer: "D",
      explanation: "Cụm 'According to reports' (Theo các báo cáo).",
      tag: "Vocabulary"
    },
    {
      q_id: 128,
      question_text: "Next month, the Kneath House will host an exhibition of ------- furniture and clothing from the eighteenth century.",
      options: { A: "authentic", B: "authentically", C: "authenticate", D: "authenticity" },
      answer: "A",
      explanation: "Tính từ 'authentic' (nguyên bản/đích thực).",
      tag: "Grammar"
    },
    {
      q_id: 129,
      question_text: "PKTM’s regional managers serve ------- the direction of the vice president.",
      options: { A: "among", B: "under", C: "behind", D: "opposite" },
      answer: "B",
      explanation: "Cấu trúc 'under the direction of' (dưới sự hướng dẫn/chỉ đạo).",
      tag: "Grammar"
    },
    {
      q_id: 130,
      question_text: "------- a recent surge in demand, Vanita’s Catering is hiring four additional servers.",
      options: { A: "Everywhere", B: "Possibly", C: "In total", D: "Owing to" },
      answer: "D",
      explanation: "Giới từ 'Owing to' (Bởi vì) chỉ nguyên nhân.",
      tag: "Grammar"
    }
  ],  part_6: [
    {
      group_id: "P6_T3_G1",
      passage: `To: All Staff
      From: Yoreli Costa
      Subject: Florence Shawn
      Hi Everyone,
      I have news to share about a ------- (131) in the human resources department. After nearly twenty years with Cometti Creative, Florence Shawn has decided to retire from the position of director of human resources.
      Our current senior manager of human resources, Makoto Ichise, will replace Ms. Shawn when she retires. Ms. Shawn ------- (132) Mr. Ichise since he joined the company five years ago.
      Ms. Shawn’s ------- (133) day will be February 22. A retirement party will be held for her on that day at 4:00 P.M. in the Terey Lobby. ------- (134).
      Best,
      Yoreli Costa`,
      questions: [
        { q_id: 131, options: { A: "difference", B: "strategy", C: "change", D: "practice" }, answer: "C", explanation: "Sự thay đổi (change) nhân sự.", tag: "Vocabulary" },
        { q_id: 132, options: { A: "mentors", B: "is mentoring", C: "will mentor", D: "has been mentoring" }, answer: "D", explanation: "Thì hiện tại hoàn thành tiếp diễn đi với 'since'.", tag: "Grammar" },
        { q_id: 133, options: { A: "last", B: "original", C: "flexible", D: "alternate" }, answer: "A", explanation: "Ngày làm việc cuối cùng (last day).", tag: "Vocabulary" },
        { q_id: 134, options: { A: "A", B: "B", C: "C", D: "D" }, answer: "B", explanation: "Lời chúc mừng đồng nghiệp nghỉ hưu.", tag: "Context" }
      ]
    },
    {
      group_id: "P6_T3_G2",
      passage: `Lovitt Real Estate
      Helping Manitoba Families Find their Dream Homes
      Manuel Lovitt, ------- (135) of Lovitt Real Estate, has been selling real estate for over 17 years. Mr. Lovitt and his award-winning team ------- (136) in homes for families in the Winnipeg, Brandon, and Dauphin areas. They know about the schools, parks, services, transportation, and activities that enhance family life in the area where you want to reside. ------- (137).
      Contact Lovitt Real Estate today and let the team guide you ------- (138) the home of your dreams. They will listen to your needs, negotiate on your behalf, and get you the best home for your hard-earned money.`,
      questions: [
        { q_id: 135, options: { A: "own", B: "owned", C: "owner", D: "owning" }, answer: "C", explanation: "Danh từ 'owner' (chủ sở hữu).", tag: "Grammar" },
        { q_id: 136, options: { A: "practice", B: "specialize", C: "report", D: "purchase" }, answer: "B", explanation: "Động từ 'specialize in' (chuyên môn về).", tag: "Vocabulary" },
        { q_id: 137, options: { A: "A", B: "B", C: "C", D: "D" }, answer: "B", explanation: "Sống tại cộng đồng họ phục vụ.", tag: "Context" },
        { q_id: 138, options: { A: "toward", B: "fixing", C: "because", D: "along" }, answer: "A", explanation: "Hướng tới (toward) ngôi nhà mơ ước.", tag: "Vocabulary" }
      ]
    },
    {
      group_id: "P6_T3_G3",
      passage: `Welcome to “Distributing Your Savings.” This slide ------- (139) is the third of a twelve-segment educational series called “Preparing for Retirement.” ------- (140).
      This series provides only ------- (141) advice. It should not replace the guidance of your investment planner. The series has been developed as background material to help you ask key questions when ------- (142) with your investment planner. We hope you find this information helpful.
      Swainson-Gray Investments`,
      questions: [
        { q_id: 139, options: { A: "presenting", B: "presents", C: "presentation", D: "presented" }, answer: "C", explanation: "Cụm 'slide presentation' (bài thuyết trình).", tag: "Grammar" },
        { q_id: 140, options: { A: "A", B: "B", C: "C", D: "D" }, answer: "B", explanation: "Mục đích của chuỗi bài học tài chính.", tag: "Context" },
        { q_id: 141, options: { A: "regional", B: "expensive", C: "supplemental", D: "playful" }, answer: "C", explanation: "Lời khuyên mang tính bổ sung (supplemental).", tag: "Vocabulary" },
        { q_id: 142, options: { A: "consulting", B: "prescribing", C: "listing", D: "following" }, answer: "A", explanation: "Tư vấn/tham khảo (consulting) với chuyên gia.", tag: "Vocabulary" }
      ]
    },
    {
      group_id: "P6_T3_G4",
      passage: `To: Dana Paulwell
      From: Silas Laveau
      Subject: My input
      Dear Dr. Paulwell,
      This message is in response to yesterday’s staff meeting, particularly the discussion on how certain aspects of the clinic may affect our work and mission. ------- (143).
      Currently, the vending machines in the hall outside our waiting room are stocked with sugary and salty products such as soft drinks and chips. As a health care provider, we ------- (144) beverages and snacks that show our commitment to wellness. ------- (145), our mission is focused on good health.
      I have attached an article about actions that medical centers like ours are taking to improve their hospitality stations. I hope you find it ------- (146). It details some easy and cost-effective changes we could consider.
      Kind regards,
      Silas Laveau`,
            questions: [
              { q_id: 143, options: { A: "A", B: "B", C: "C", D: "D" }, answer: "C", explanation: "Đề xuất về một chủ đề cụ thể.", tag: "Context" },
              { q_id: 144, options: { A: "will offer", B: "have offered", C: "were offering", D: "should be offering" }, answer: "D", explanation: "Lời khuyên/nghĩa vụ nên làm 'should be offering'.", tag: "Grammar" },
              { q_id: 145, options: { A: "After all", B: "By the way", C: "In the meantime", D: "On the other hand" }, answer: "A", explanation: "'After all' dùng để nhấn mạnh lý do cuối cùng.", tag: "Transitions" },
              { q_id: 146, options: { A: "useful", B: "eventful", C: "profitable", D: "comfortable" }, answer: "A", explanation: "Tính từ 'useful' (hữu ích) cho tài liệu.", tag: "Vocabulary" }
            ]
          }
  ],

 
    part_7: []
    }
  },
    {
    metadata: { year: 2024, test_no: 4, series: "ETS TOEIC 2024" },
    content: {
     
  "part_5": [
    {
      "q_id": 101,
      "question_text": "Mr. Barrientos has worked at the company ------- six years.",
      "options": { "A": "for", "B": "since", "C": "with", "D": "lately" },
      "answer": "A",
      "explanation": "Dùng 'for' cộng với một khoảng thời gian trong thì hiện tại hoàn thành.",
      "tag": "Grammar"
    },
    {
      "q_id": 102,
      "question_text": "The staff cafeteria stops ------- lunch at 2:00 P.M.",
      "options": { "A": "taking", "B": "buying", "C": "serving", "D": "working" },
      "answer": "C",
      "explanation": "Dựa vào ngữ cảnh nhà ăn (cafeteria), 'serving lunch' (phục vụ bữa trưa) là hợp lý nhất.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 103,
      "question_text": "The annual report will be ready after ------- make the necessary revisions.",
      "options": { "A": "I", "B": "me", "C": "myself", "D": "my" },
      "answer": "A",
      "explanation": "Cần một đại từ chủ ngữ đứng trước động từ 'make'.",
      "tag": "Grammar"
    },
    {
      "q_id": 104,
      "question_text": "Mr. Louden was offered a full-time position at Fortelio Corporation ------- a division manager.",
      "options": { "A": "about", "B": "as", "C": "after", "D": "around" },
      "answer": "B",
      "explanation": "Dùng 'as' để chỉ chức danh hoặc vị trí công việc.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 105,
      "question_text": "Kennedy Sports will ------- its end-of-season sale through the month of January.",
      "options": { "A": "continuing", "B": "continued", "C": "continues", "D": "continue" },
      "answer": "D",
      "explanation": "Sau động từ khuyết thiếu 'will' là động từ nguyên mẫu.",
      "tag": "Grammar"
    },
    {
      "q_id": 106,
      "question_text": "Ms. Najjar is going to give a presentation ------- workplace regulations at noon.",
      "options": { "A": "near", "B": "to", "C": "past", "D": "on" },
      "answer": "D",
      "explanation": "Cụm từ 'presentation on/about something' (thuyết trình về vấn đề gì).",
      "tag": "Vocabulary"
    },
    {
      "q_id": 107,
      "question_text": "Mr. Telguld submitted the ------- surveys before the monthly board meeting.",
      "options": { "A": "completely", "B": "completed", "C": "completing", "D": "completes" },
      "answer": "B",
      "explanation": "Cần một tính từ (dạng phân từ) để bổ nghĩa cho danh từ 'surveys'.",
      "tag": "Grammar"
    },
    {
      "q_id": 108,
      "question_text": "Travel funds are available to student presenters coming to the conference from a significant -------.",
      "options": { "A": "location", "B": "amount", "C": "reason", "D": "distance" },
      "answer": "D",
      "explanation": "Cụm 'significant distance' nghĩa là khoảng cách xa/đáng kể.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 109,
      "question_text": "Ms. Okada is ------- a new social media campaign at the request of our office manager.",
      "options": { "A": "organize", "B": "organized", "C": "organizing", "D": "organization" },
      "answer": "C",
      "explanation": "Thì hiện tại tiếp diễn (is + V-ing) diễn tả hành động đang thực hiện.",
      "tag": "Grammar"
    },
    {
      "q_id": 110,
      "question_text": "The speaker will offer five tips for making wise purchasing -------.",
      "options": { "A": "items", "B": "decisions", "C": "values", "D": "remedies" },
      "answer": "B",
      "explanation": "Cụm 'purchasing decisions' (các quyết định mua sắm).",
      "tag": "Vocabulary"
    },
    {
      "q_id": 111,
      "question_text": "Please log on to your online checking account ------- the next 30 days in order to keep it active.",
      "options": { "A": "within", "B": "how", "C": "whether", "D": "and" },
      "answer": "A",
      "explanation": "'Within' dùng để chỉ một khoảng thời gian giới hạn (trong vòng 30 ngày).",
      "tag": "Grammar"
    },
    {
      "q_id": 112,
      "question_text": "The Bradyville Inn ------- live jazz music in the dining area on Friday evenings.",
      "options": { "A": "features", "B": "marks", "C": "sounds", "D": "collects" },
      "answer": "A",
      "explanation": "'Features' có nghĩa là có/bao gồm một chương trình đặc biệt.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 113,
      "question_text": "Leeann’s Organic Fruit Spreads can be purchased ------- from the company’s Web site.",
      "options": { "A": "direction", "B": "directly", "C": "directness", "D": "directed" },
      "answer": "B",
      "explanation": "Cần một trạng từ để bổ nghĩa cho động từ 'purchased'.",
      "tag": "Grammar"
    },
    {
      "q_id": 114,
      "question_text": "------- the event organizers’ best efforts, they have been unable to attract enough volunteers this spring.",
      "options": { "A": "Behind", "B": "Versus", "C": "Among", "D": "Despite" },
      "answer": "D",
      "explanation": "'Despite' + cụm danh từ dùng để chỉ sự nhượng bộ (Mặc dù).",
      "tag": "Grammar"
    },
    {
      "q_id": 115,
      "question_text": "Mr. Perez ------- as an industrial engineer at Gaberly Logistics for almost twenty years.",
      "options": { "A": "employs", "B": "to be employed", "C": "is employing", "D": "has been employed" },
      "answer": "D",
      "explanation": "Thì hiện tại hoàn thành ở dạng bị động thể hiện quá trình làm việc kéo dài đến hiện tại.",
      "tag": "Grammar"
    },
    {
      "q_id": 116,
      "question_text": "Soon after Ms. Manilla was hired, the sales department’s productivity began to increase -------.",
      "options": { "A": "mainly", "B": "respectively", "C": "noticeably", "D": "closely" },
      "answer": "C",
      "explanation": "'Noticeably' (một cách đáng kể/rõ rệt) mô tả mức độ tăng năng suất.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 117,
      "question_text": "Small businesses ------- participate in the Get Ahead program will receive marketing tools to help them attract customers.",
      "options": { "A": "that", "B": "they", "C": "what", "D": "whoever" },
      "answer": "A",
      "explanation": "Đại từ quan hệ 'that' thay thế cho danh từ 'Small businesses'.",
      "tag": "Grammar"
    },
    {
      "q_id": 118,
      "question_text": "Our copy editors will review the manuscript ------- will not return it until the end of next week.",
      "options": { "A": "or", "B": "once", "C": "either", "D": "but" },
      "answer": "D",
      "explanation": "Dùng liên từ 'but' để nối hai vế có tính chất bổ sung/đối lập nhẹ về thời gian.",
      "tag": "Grammar"
    },
    {
      "q_id": 119,
      "question_text": "Mira Kumar was probably the ------- of all the interns at Kolbry Media last summer.",
      "options": { "A": "ambitious", "B": "most ambitious", "C": "ambitiously", "D": "more ambitiously" },
      "answer": "B",
      "explanation": "Cấu trúc so sánh nhất (the most + adj) khi so sánh giữa tất cả thực tập sinh.",
      "tag": "Grammar"
    },
    {
      "q_id": 120,
      "question_text": "Orbin’s Fish Company expanded to a total of 26 stores ------- its takeover of a rival chain.",
      "options": { "A": "whenever", "B": "toward", "C": "following", "D": "usually" },
      "answer": "C",
      "explanation": "'Following' ở đây có nghĩa là 'sau khi' (tương tự after).",
      "tag": "Vocabulary"
    },
    {
      "q_id": 121,
      "question_text": "Ms. Cartwright told her team members that she wanted ------- to streamline the company’s assembly process.",
      "options": { "A": "theirs", "B": "they", "C": "them", "D": "themselves" },
      "answer": "C",
      "explanation": "Sau động từ 'want' cần một đại từ làm tân ngữ (them).",
      "tag": "Grammar"
    },
    {
      "q_id": 122,
      "question_text": "Rupert’s Food Service uses ------- technology to track all of its shipments.",
      "options": { "A": "strict", "B": "numerous", "C": "advanced", "D": "crowded" },
      "answer": "C",
      "explanation": "'Advanced technology' là cụm từ cố định (công nghệ tiên tiến).",
      "tag": "Vocabulary"
    },
    {
      "q_id": 123,
      "question_text": "Our app includes a ------- so that users can determine whether they are within their budget goals.",
      "options": { "A": "calculator", "B": "calculated", "C": "calculating", "D": "calculations" },
      "answer": "A",
      "explanation": "Cần một danh từ chỉ công cụ sau mạo từ 'a'.",
      "tag": "Grammar"
    },
    {
      "q_id": 124,
      "question_text": "To ------- that its facilities are cleaned every day, the Selboa Company has hired more janitors.",
      "options": { "A": "ensure", "B": "affect", "C": "provide", "D": "secure" },
      "answer": "A",
      "explanation": "'Ensure' (đảm bảo) thường đi kèm với một mệnh đề hoặc sự việc phía sau.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 125,
      "question_text": "During his term as a legislator, Jeremy Moran ------- promoted public awareness of the need for infrastructure improvements.",
      "options": { "A": "act", "B": "action", "C": "active", "D": "actively" },
      "answer": "D",
      "explanation": "Cần trạng từ để bổ nghĩa cho động từ 'promoted'.",
      "tag": "Grammar"
    },
    {
      "q_id": 126,
      "question_text": "Pyxie Print’s business is so new that we need to explain the full range of our services to ------- clients.",
      "options": { "A": "trained", "B": "potential", "C": "elected", "D": "paid" },
      "answer": "B",
      "explanation": "'Potential clients' (khách hàng tiềm năng).",
      "tag": "Vocabulary"
    },
    {
      "q_id": 127,
      "question_text": "Phone orders that are ------- to local stores by 11:00 A.M. are eligible for same-day pickup.",
      "options": { "A": "submitted", "B": "submission", "C": "submitting", "D": "submits" },
      "answer": "A",
      "explanation": "Cấu trúc bị động (are + V3/ed) của động từ 'submit'.",
      "tag": "Grammar"
    },
    {
      "q_id": 128,
      "question_text": "An Oswald Hardware associate will ------- place an order for customers who need larger quantities than what is in stock.",
      "options": { "A": "slightly", "B": "wholly", "C": "busily", "D": "gladly" },
      "answer": "D",
      "explanation": "'Gladly' (sẵn lòng/vui vẻ) thể hiện thái độ phục vụ khách hàng.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 129,
      "question_text": "Mia Daushvili performed with the Bayhead Orchestra on Monday evening, ------- her virtuosic skills on the piccolo.",
      "options": { "A": "displays", "B": "had displayed", "C": "displaying", "D": "was displayed" },
      "answer": "C",
      "explanation": "Dùng V-ing để rút gọn mệnh đề quan hệ/mệnh đề đồng chủ ngữ mang nghĩa chủ động.",
      "tag": "Grammar"
    },
    {
      "q_id": 130,
      "question_text": "When reviewing applicants for the clerk position, Ms. Ng will consider both education and ------- experience.",
      "options": { "A": "prior", "B": "quick", "C": "lean", "D": "calm" },
      "answer": "A",
      "explanation": "'Prior experience' (kinh nghiệm làm việc trước đây).",
      "tag": "Vocabulary"
    }
  ],
  "part_6": [
    {
      "group_id": "P6_G01",
      "passage": `D-Zine Pop là nguồn thông tin của bạn về ------- (131) mới nhất trong thế giới thời trang. Điều khởi đầu là một thử nghiệm trên mạng xã hội ------- (132) thành một nền tảng nội dung với những người đăng ký tại mười bảy quốc gia trên toàn thế giới. Chúng tôi liên tục thêm các tính năng để cải thiện trải nghiệm người dùng và chia sẻ những loại quần áo và phụ kiện may mặc nào đang phổ biến hiện nay. Chúng tôi cũng thực hiện các bản cập nhật định kỳ cho các điều khoản dịch vụ của mình. Việc ------- (133) truy cập nội dung của người đăng ký phụ thuộc vào việc đồng ý với các điều khoản này; do đó, chúng tôi khuyến khích bạn xem lại và chấp nhận chúng tại dzinepop.com/privacy. Liên hệ với nhóm dịch vụ khách hàng của chúng tôi tại support@dzinepop.com nếu bạn có bất kỳ câu hỏi nào. ------- (134).`,
      "questions": [
        {
          "q_id": 131,
          "options": { "A": "controversies", "B": "consumers", "C": "trends", "D": "versions" },
          "answer": "C",
          "explanation": "'Fashion trends' (xu hướng thời trang).",
          "tag": "Vocabulary"
        },
        {
          "q_id": 132,
          "options": { "A": "evolving", "B": "evolution", "C": "will be evolving", "D": "has evolved" },
          "answer": "D",
          "explanation": "Thì hiện tại hoàn thành diễn tả sự việc đã xảy ra và dẫn đến kết quả hiện tại.",
          "tag": "Grammar"
        },
        {
          "q_id": 133,
          "options": { "A": "continue", "B": "continued", "C": "continuation", "D": "continues" },
          "answer": "B",
          "explanation": "'Continued access' (việc tiếp tục truy cập) - sử dụng tính từ phân từ.",
          "tag": "Grammar"
        },
        {
          "q_id": 134,
          "options": { "A": "Representatives are available...", "B": "The changes made...", "C": "Fresh content is accessible...", "D": "We are no longer offering..." },
          "answer": "A",
          "explanation": "Câu kết thúc thông báo hướng dẫn liên hệ dịch vụ khách hàng.",
          "tag": "Sentence Insertion"
        }
      ]
    },
    {
      "group_id": "P6_G02",
      "passage": `Màn hình điện thoại thông minh của bạn bị trầy xước hay nứt vỡ? ------- (135)? Ứng dụng của bạn bị treo hay bị lỗi? Các chuyên gia tại Phone Tune-Up có thể giúp bạn! Chúng tôi không sử dụng gì ngoài những linh kiện chất lượng tốt nhất để ------- (136) điện thoại di động của bạn. Hãy để các kỹ thuật viên được chứng nhận của chúng tôi giúp bạn tiết kiệm thời gian và chi phí liên quan đến việc thay điện thoại mới. Khi chúng tôi ------- (137), bạn sẽ nghĩ rằng điện thoại cũ của mình là hàng mới tinh. Để đặt lịch hẹn, hãy gọi 604-555-0198 hoặc truy cập www.phonetuneup.com. Dịch vụ trong ngày thường có sẵn ------- (138) các bộ phận cần thiết có sẵn trong kho.`,
      "questions": [
        {
          "q_id": 135,
          "options": { "A": "Does your printer...", "B": "Does it take all day...", "C": "Do you want to...", "D": "Do you pay too much..." },
          "answer": "B",
          "explanation": "Câu hỏi bổ sung về các lỗi hỏng hóc điện thoại (pin).",
          "tag": "Sentence Insertion"
        },
        {
          "q_id": 136,
          "options": { "A": "remove", "B": "borrow", "C": "examine", "D": "repair" },
          "answer": "D",
          "explanation": "'Repair your phone' (sửa điện thoại).",
          "tag": "Vocabulary"
        },
        {
          "q_id": 137,
          "options": { "A": "trained", "B": "available", "C": "done", "D": "dismissed" },
          "answer": "C",
          "explanation": "'When we are done' (Khi chúng tôi hoàn tất công việc).",
          "tag": "Vocabulary"
        },
        {
          "q_id": 138,
          "options": { "A": "whose", "B": "must", "C": "if", "D": "of" },
          "answer": "C",
          "explanation": "Dùng liên từ 'if' cho điều kiện.",
          "tag": "Grammar"
        }
      ]
    },
    {
      "group_id": "P6_G03",
      "passage": `Chuỗi siêu thị Hsing Market có trụ sở tại Sacramento hôm nay đã thông báo rằng họ sẽ mở một chi nhánh ------- (139) tại San Jose vào tháng Mười. Nó sẽ chiếm tòa nhà từng là nơi đặt Siêu thị Văn phòng Watson nằm tại số 1539 phố West Oak, đã đóng cửa vào năm ngoái. Giám đốc điều hành Hsing Market, Alice Tran cho biết, \"Chúng tôi rất hào hứng cuối cùng cũng ------- (140) mở một cửa hàng tại San Jose. ------- (141). Khi tòa nhà Watson có sẵn, chúng tôi đã nắm bắt ngay cơ hội để chuyển đến.\" Là một cửa hàng tạp hóa trong khu vực, Hsing Market tự hào về việc thuê những ứng viên từ cộng đồng địa phương. Khoảng 75 phần trăm tất cả nhân viên sống trong vòng hai dặm quanh cửa hàng nơi họ ------- (142).`,
      "questions": [
        {
          "q_id": 139,
          "options": { "A": "location", "B": "locate", "C": "to locate", "D": "locating" },
          "answer": "A",
          "explanation": "'Branch location' (địa điểm chi nhánh).",
          "tag": "Vocabulary"
        },
        {
          "q_id": 140,
          "options": { "A": "finally", "B": "instead", "C": "likewise", "D": "suddenly" },
          "answer": "A",
          "explanation": "'Finally open' (cuối cùng cũng đã mở).",
          "tag": "Vocabulary"
        },
        {
          "q_id": 141,
          "options": { "A": "The store features...", "B": "We hope that...", "C": "We have had our eyes...", "D": "Our corporate headquarters..." },
          "answer": "C",
          "explanation": "Nói về việc đã để mắt tới thành phố này từ lâu.",
          "tag": "Sentence Insertion"
        },
        {
          "q_id": 142,
          "options": { "A": "save", "B": "work", "C": "shop", "D": "register" },
          "answer": "B",
          "explanation": "Nơi họ làm việc (work).",
          "tag": "Vocabulary"
        }
      ]
    },
    {
      "group_id": "P6_G04",
      "passage": `Tropick Textiles gần đây đã mở rộng ------- (143) các loại vải hiện có trên thị trường. Trong nỗ lực giới thiệu các giải pháp thay thế thân thiện với môi trường cho bông và các loại sợi truyền thống khác, công ty ------- (144) một loại sợi mới được làm từ các vật liệu thường bị vứt bỏ. Tropick Textiles lấy lá chuối và dứa kết hợp chúng với sợi tre để tạo ra Vải Leafi. Lá của các loại cây này thường bị vứt bỏ ------- (145) sau khi quả được thu hoạch. Quy trình của Tropick Textiles ngăn chặn nhiều lá cây đi vào bãi rác, thay vào đó chuyển đổi chúng thành vật liệu hữu dụng. ------- (146).`,
      "questions": [
        {
          "q_id": 143,
          "options": { "A": "range", "B": "expense", "C": "strength", "D": "appearance" },
          "answer": "A",
          "explanation": "'Range of fabrics' (phạm vi/các loại vải).",
          "tag": "Vocabulary"
        },
        {
          "q_id": 144,
          "options": { "A": "are developed", "B": "has developed", "C": "will develop", "D": "to develop" },
          "answer": "B",
          "explanation": "Thì hiện tại hoàn thành mô tả một thành tựu/sản phẩm mới.",
          "tag": "Grammar"
        },
        {
          "q_id": 145,
          "options": { "A": "now", "B": "thus", "C": "even", "D": "once" },
          "answer": "D",
          "explanation": "'Once' ở đây nghĩa là ngay sau khi (tương tự as soon as).",
          "tag": "Vocabulary"
        },
        {
          "q_id": 146,
          "options": { "A": "The resulting durable...", "B": "Inquiries regarding...", "C": "Tropick Textiles will...", "D": "Manufacturing costs have..." },
          "answer": "A",
          "explanation": "Kết luận về đặc tính của loại vải mới tạo ra.",
          "tag": "Sentence Insertion"
        }
      ]
    }
  ],

      part_7: []
    }
  },
    {
    metadata: { year: 2024, test_no: 5, series: "ETS TOEIC 2024" },
    content: {
      "part_5": [
    {
      "q_id": 101,
      "question_text": "After upgrading to Pro Data Whiz, our clients began ------- problems with spreadsheets.",
      "options": {"A": "has", "B": "had", "C": "have", "D": "having"},
      "answer": "D",
      "explanation": "Sau động từ 'begin', ta có thể dùng To-V hoặc V-ing. Trong 4 phương án, chỉ có 'having' (V-ing) là đúng cấu trúc để chỉ việc bắt đầu một hành động/tình trạng.",
      "tag": "Grammar"
    },
    {
      "q_id": 102,
      "question_text": "Requests for additional days off are ------- by Ms. Chung in Human Resources.",
      "options": {"A": "approved", "B": "dropped", "C": "reached", "D": "reminded"},
      "answer": "A",
      "explanation": "Dựa vào ngữ cảnh phòng Nhân sự (Human Resources), các yêu cầu xin nghỉ phép (Requests for days off) sẽ được 'phê duyệt' (approved).",
      "tag": "Vocabulary"
    },
    {
      "q_id": 103,
      "question_text": "The programmers have a list of changes ------- the next software update.",
      "options": {"A": "between", "B": "of", "C": "for", "D": "above"},
      "answer": "C",
      "explanation": "Giới từ 'for' dùng để chỉ mục đích hoặc đối tượng hướng tới. 'Changes for the next update' nghĩa là các thay đổi dành cho bản cập nhật tới.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 104,
      "question_text": "Let Farida Banquet Service ------- professional catering for your important corporate events.",
      "options": {"A": "providing", "B": "provide", "C": "provides", "D": "to provide"},
      "answer": "B",
      "explanation": "Cấu trúc 'Let + Object + V-bare' (để ai đó làm gì). Ở đây, 'provide' là động từ nguyên mẫu không 'to'.",
      "tag": "Grammar"
    },
    {
      "q_id": 105,
      "question_text": "Using various innovative techniques, Boyd Industries has improved the ------- of its tiles.",
      "options": {"A": "closure", "B": "product", "C": "quality", "D": "method"},
      "answer": "C",
      "explanation": "Innovative techniques (kỹ thuật đổi mới) thường được dùng để cải thiện 'chất lượng' (quality) của sản phẩm (tiles - gạch lát).",
      "tag": "Vocabulary"
    },
    {
      "q_id": 106,
      "question_text": "------- of all cosmetics are final, and refunds will not be given under any circumstances.",
      "options": {"A": "Sale", "B": "Sales", "C": "Sells", "D": "Selling"},
      "answer": "B",
      "explanation": "Cần một danh từ làm chủ ngữ. 'Sales' (việc bán hàng) là danh từ phù hợp. Cụm 'Sales are final' là thông báo phổ biến nghĩa là hàng đã mua không được trả lại.",
      "tag": "Grammar"
    },
    {
      "q_id": 107,
      "question_text": "If you have already submitted your response, no ------- action is required.",
      "options": {"A": "bright", "B": "further", "C": "previous", "D": "average"},
      "answer": "B",
      "explanation": "Cụm từ 'further action' (hành động xa hơn/thêm nữa) thường dùng trong các thông báo để chỉ việc không cần làm gì thêm.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 108,
      "question_text": "Ms. Sieglak stated that the app design was based on ------- own research.",
      "options": {"A": "she", "B": "hers", "C": "her", "D": "herself"},
      "answer": "C",
      "explanation": "Trước danh từ 'research' và từ nhấn mạnh 'own', ta cần một tính từ sở hữu 'her' (của cô ấy).",
      "tag": "Grammar"
    },
    {
      "q_id": 109,
      "question_text": "------- the organization has doubled its outreach efforts, it has yet to see an increase in new clients.",
      "options": {"A": "Until", "B": "Because", "C": "Although", "D": "Therefore"},
      "answer": "C",
      "explanation": "Hai vế câu mang nghĩa đối lập (nỗ lực gấp đôi nhưng chưa tăng khách), do đó ta chọn liên từ 'Although' (Mặc dù).",
      "tag": "Grammar"
    },
    {
      "q_id": 110,
      "question_text": "Starting on October 8, ------- board of education meetings will be streamed live on the school district’s Web site.",
      "options": {"A": "all", "B": "so", "C": "that", "D": "to"},
      "answer": "A",
      "explanation": "'All' đi với danh từ số nhiều 'meetings' để chỉ toàn bộ các cuộc họp sẽ được phát trực tiếp.",
      "tag": "Grammar"
    },
    {
      "q_id": 111,
      "question_text": "The hairstylists at Urbanite Salon have ------- experience working with a variety of hair products.",
      "options": {"A": "considers", "B": "considerable", "C": "considerate", "D": "considering"},
      "answer": "B",
      "explanation": "Cần một tính từ đứng trước danh từ 'experience'. 'Considerable' (đáng kể/nhiều) là tính từ mô tả lượng kinh nghiệm.",
      "tag": "Grammar"
    },
    {
      "q_id": 112,
      "question_text": "Both candidates are ------- suitable for the assistant manager position.",
      "options": {"A": "permanently", "B": "promptly", "C": "equally", "D": "gradually"},
      "answer": "C",
      "explanation": "Khi so sánh hai ứng viên (Both candidates), trạng từ 'equally' (ngang nhau/như nhau) dùng để chỉ mức độ phù hợp tương đương.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 113,
      "question_text": "With the acquisition of Bloom Circuit, Wellstrom Hardware has ------- expanded its offerings and services.",
      "options": {"A": "greater", "B": "greatness", "C": "great", "D": "greatly"},
      "answer": "D",
      "explanation": "Cần một trạng từ để bổ nghĩa cho động từ 'expanded'. 'Greatly' (rất nhiều/đáng kể) là lựa chọn duy nhất đúng loại từ.",
      "tag": "Grammar"
    },
    {
      "q_id": 114,
      "question_text": "Please note that file names should not ------- capital letters or spaces.",
      "options": {"A": "differ", "B": "contain", "C": "match", "D": "pick"},
      "answer": "B",
      "explanation": "Trong quy tắc đặt tên tệp, động từ 'contain' (chứa) dùng để chỉ việc không được bao gồm chữ hoa hay khoảng trắng.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 115,
      "question_text": "The Sun-Tech ceiling fan has received more than 15,000 five-star reviews from ------- customers.",
      "options": {"A": "satisfied", "B": "checked", "C": "adjusted", "D": "allowed"},
      "answer": "A",
      "explanation": "Những đánh giá 5 sao (five-star reviews) thường đến từ những khách hàng 'hài lòng' (satisfied).",
      "tag": "Vocabulary"
    },
    {
      "q_id": 116,
      "question_text": "Please ------- the Returns section of our Web site if you are unhappy with any part of your order.",
      "options": {"A": "visit", "B": "visits", "C": "visited", "D": "visiting"},
      "answer": "A",
      "explanation": "Cấu trúc mệnh lệnh 'Please + V-bare'. Chọn động từ nguyên mẫu 'visit'.",
      "tag": "Grammar"
    },
    {
      "q_id": 117,
      "question_text": "Ito Auto Group is offering excellent ------- on pre-owned vehicles this month.",
      "options": {"A": "trips", "B": "reasons", "C": "customs", "D": "deals"},
      "answer": "D",
      "explanation": "'Deals' trong kinh doanh xe hơi nghĩa là các thỏa thuận hoặc giá ưu đãi (excellent deals - ưu đãi tuyệt vời).",
      "tag": "Vocabulary"
    },
    {
      "q_id": 118,
      "question_text": "Product prices are influenced ------- such factors as consumer demand and retail competition.",
      "options": {"A": "by", "B": "under", "C": "those", "D": "nearly"},
      "answer": "A",
      "explanation": "Cấu trúc bị động 'be influenced by' (bị ảnh hưởng bởi...).",
      "tag": "Grammar"
    },
    {
      "q_id": 119,
      "question_text": "Monmouth Enterprises will be ------- prefabricated houses online starting on April 1.",
      "options": {"A": "predicting", "B": "passing", "C": "retaining", "D": "marketing"},
      "answer": "D",
      "explanation": "Động từ 'marketing' ở đây có nghĩa là quảng bá và chào bán sản phẩm ra thị trường.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 120,
      "question_text": "All employees should familiarize ------- with the company’s policies and procedures.",
      "options": {"A": "their", "B": "them", "C": "theirs", "D": "themselves"},
      "answer": "D",
      "explanation": "Cấu trúc phản thân 'familiarize oneself with something' (tự làm quen/tìm hiểu về cái gì). Chủ ngữ là 'All employees' nên dùng 'themselves'.",
      "tag": "Grammar"
    },
    {
      "q_id": 121,
      "question_text": "Custom furniture orders require a 50 percent deposit ------- the time of the order.",
      "options": {"A": "as", "B": "off", "C": "into", "D": "at"},
      "answer": "D",
      "explanation": "Cụm từ chỉ thời điểm: 'at the time of...' (tại thời điểm...).",
      "tag": "Vocabulary"
    },
    {
      "q_id": 122,
      "question_text": "We are planning a ------- for the Klemner Corporation’s twentieth anniversary.",
      "options": {"A": "celebration", "B": "celebrated", "C": "celebrity", "D": "celebrate"},
      "answer": "A",
      "explanation": "Sau mạo từ 'a' cần một danh từ. 'Celebration' (buổi lễ kỷ niệm) là danh từ phù hợp nhất về nghĩa.",
      "tag": "Grammar"
    },
    {
      "q_id": 123,
      "question_text": "Though she lacks political experience, Ms. Diaz has been ------- impressive in her first term as mayor.",
      "options": {"A": "quite", "B": "soon", "C": "ever", "D": "next"},
      "answer": "A",
      "explanation": "Trạng từ chỉ mức độ 'quite' (khá) bổ nghĩa cho tính từ 'impressive'.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 124,
      "question_text": "The university library usually acquires ------- copies of best-selling books to meet students’ demand.",
      "options": {"A": "multiply", "B": "multiple", "C": "multiples", "D": "multiplicity"},
      "answer": "B",
      "explanation": "Cần một tính từ đứng trước danh từ 'copies'. 'Multiple' nghĩa là nhiều/đa dạng.",
      "tag": "Grammar"
    },
    {
      "q_id": 125,
      "question_text": "This year’s conference tote bags were ------- donated by Etani Designs.",
      "options": {"A": "generous", "B": "generosity", "C": "generously", "D": "generosities"},
      "answer": "C",
      "explanation": "Cần một trạng từ bổ nghĩa cho động từ 'donated'. 'Generously donated' (được tặng một cách hào phóng).",
      "tag": "Grammar"
    },
    {
      "q_id": 126,
      "question_text": "We will be holding a ------- on Friday to honor the 30-year engineering career of Mr. Kuan.",
      "options": {"A": "record", "B": "share", "C": "reception", "D": "place"},
      "answer": "C",
      "explanation": "'Reception' nghĩa là một buổi tiệc chiêu đãi hoặc buổi đón tiếp để vinh danh ai đó.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 127,
      "question_text": "Groove Background creates soothing playlists of instrumental music, ------- classical and jazz.",
      "options": {"A": "instead", "B": "including", "C": "in addition", "D": "indeed"},
      "answer": "B",
      "explanation": "Sử dụng 'including' (bao gồm) để liệt kê các ví dụ cụ thể (classical and jazz) cho 'instrumental music'.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 128,
      "question_text": "Members of the finance department ------- to Mr. Chua’s lecture on risk avoidance.",
      "options": {"A": "to be invited", "B": "inviting", "C": "invite", "D": "are invited"},
      "answer": "D",
      "explanation": "Cấu trúc bị động thì hiện tại đơn: 'are + V3/ed'. Các thành viên 'được mời' tới buổi bài giảng.",
      "tag": "Grammar"
    },
    {
      "q_id": 129,
      "question_text": "The board of trustees debated for hours ------- the revised hiring policies.",
      "options": {"A": "during", "B": "above", "C": "over", "D": "across"},
      "answer": "C",
      "explanation": "Động từ 'debate' thường đi với giới từ 'over' (tranh luận về vấn đề gì đó).",
      "tag": "Vocabulary"
    },
    {
      "q_id": 130,
      "question_text": "The participants closely ------- the fitness instructor’s movements tend to learn the proper technique more quickly.",
      "options": {"A": "imitate", "B": "imitations", "C": "imitative", "D": "imitating"},
      "answer": "D",
      "explanation": "Dạng rút gọn mệnh đề quan hệ chủ động (Present Participle). 'Participants (who imitate) ...' rút gọn thành 'imitating'.",
      "tag": "Grammar"
    }
],
"part_6": [
    {
      "group_id": "P6_G01",
      "passage": `Grocery Chain to Host Event\nLEIGHTON (October 8)—Ohale Foods, one of the region’s largest supermarket chains, is seeking to fill almost 100 open positions. For that reason, the company is holding a ------- (131) event on October 20. Job opportunities exist at all fourteen of Ohale’s current stores. ------- (132), Ohale is seeking employees for its new Westside location, which is still under construction. ------- (133). Those who ------- (134) the event should bring copies of their résumé to the Grand Ballroom of the Palace Suites Hotel between 10 A.M. and 7 P.M. No appointment is required.`,
      "questions": [
        {
          "q_id": 131,
          "options": {"A": "manufacturing", "B": "hiring", "C": "political", "D": "sporting"},
          "answer": "B",
          "explanation": "Dựa vào cụm 'fill open positions', mục đích sự kiện là 'tuyển dụng' (hiring).",
          "tag": "Vocabulary"
        },
        {
          "q_id": 132,
          "options": {"A": "If not", "B": "After all", "C": "Additionally", "D": "For example"},
          "answer": "C",
          "explanation": "Dùng 'Additionally' để bổ sung thêm thông tin về việc tuyển dụng cho địa điểm mới bên cạnh 14 cửa hàng hiện có.",
          "tag": "Grammar"
        },
        {
          "q_id": 133,
          "options": {
            "A": "Its grand opening is scheduled for mid-November.",
            "...": "..."
          },
          "answer": "A",
          "explanation": "Câu trước nhắc đến 'Westside location... under construction', nên câu tiếp theo nói về ngày khai trương (grand opening) là hợp lý nhất.",
          "tag": "Sentence Insertion"
        },
        {
          "q_id": 134,
          "options": {"A": "attending", "B": "to attend", "C": "attended", "D": "are attending"},
          "answer": "D",
          "explanation": "Thì hiện tại tiếp diễn dùng cho một sự kiện đã lên lịch trong tương lai. 'Those who are attending' (Những người sẽ tham dự).",
          "tag": "Grammar"
        }
      ]
    },
    {
      "group_id": "P6_G02",
      "passage": `Ajaz Water Filter Pitcher Instructions\nThank you for your purchase of an Ajaz Water Filter Pitcher. It is a wonderful solution for water that tastes great! To improve the effectiveness of the Ajaz Water Filter Pitcher, we ------- (135) priming the filter before the first use. ------- (136). Then screw the filter clockwise into the lid of the pitcher until it fits ------- (137). As you use the pitcher, remember that ------- (138) water flow is a signal that the filter is becoming clogged and will need to be replaced soon.`,
      "questions": [
        {
          "q_id": 135,
          "options": {"A": "tried", "B": "recommend", "C": "consider", "D": "started"},
          "answer": "B",
          "explanation": "Trong tài liệu hướng dẫn, nhà sản xuất thường 'khuyên dùng' (recommend) một hành động để tăng hiệu quả.",
          "tag": "Vocabulary"
        },
        {
          "q_id": 136,
          "options": {
            "C": "To do this, run cool tap water through the filter for three minutes.",
            "...": "..."
          },
          "answer": "C",
          "explanation": "Câu này hướng dẫn cách thực hiện việc 'priming the filter' (mồi bộ lọc) đã nhắc ở câu trước.",
          "tag": "Sentence Insertion"
        },
        {
          "q_id": 137,
          "options": {"A": "extremely", "B": "highly", "C": "tightly", "D": "steadily"},
          "answer": "C",
          "explanation": "Lắp bộ lọc cho đến khi nó khít 'chặt' (tightly).",
          "tag": "Vocabulary"
        },
        {
          "q_id": 138,
          "options": {"A": "diminished", "B": "diminishes", "C": "diminish", "D": "diminishable"},
          "answer": "A",
          "explanation": "Cần một tính từ bổ nghĩa cho 'water flow'. 'Diminished' (bị giảm/yếu đi) chỉ ra rằng bộ lọc đã bị tắc.",
          "tag": "Grammar"
        }
      ]
    },
    {
      "group_id": "P6_G03",
      "passage": `Returning Merchandise – Abney Home Products\nAbney Home Products is committed to providing outstanding service, and we guarantee the ------- (139) of all the products in our catalog. If you are not satisfied with a purchase, call our customer service line at 339-555-0177 to request a return authorization code. The service agent ------- (140) you for the invoice number from the package insert. ------- (141). Please be aware that Abney Home Products is not ------- (142) for postage on merchandise returns.`,
      "questions": [
        {
          "q_id": 139,
          "options": {"A": "condition", "B": "object", "C": "explanation", "D": "preview"},
          "answer": "A",
          "explanation": "'Guarantee the condition' (Đảm bảo tình trạng) của sản phẩm là lời cam kết dịch vụ phổ biến.",
          "tag": "Vocabulary"
        },
        {
          "q_id": 140,
          "options": {"A": "asked", "B": "is asking", "C": "has asked", "D": "will ask"},
          "answer": "D",
          "explanation": "Dùng thì tương lai đơn 'will ask' để mô tả quy trình sẽ xảy ra khi khách hàng gọi đến.",
          "tag": "Grammar"
        },
        {
          "q_id": 141,
          "options": {
            "C": "When you send back the product, be sure to include the authorization code.",
            "...": "..."
          },
          "answer": "C",
          "explanation": "Câu này bổ sung hướng dẫn cho quy trình trả hàng (return) đã nhắc ở phần trước.",
          "tag": "Sentence Insertion"
        },
        {
          "q_id": 142,
          "options": {"A": "responsibly", "B": "responsible", "C": "responsibility", "D": "responsibleness"},
          "answer": "B",
          "explanation": "Cấu trúc 'be responsible for' (chịu trách nhiệm cho/chi trả cho việc gì).",
          "tag": "Grammar"
        }
      ]
    },
    {
      "group_id": "P6_G04",
      "passage": `Safety Training Announcement\nTo: All Employees\nFrom: Marina Papantonio, Safety Liaison\nDate: November 12\nSubject: Safety Training\nIt is time once again for our annual safety training workshop. This year, training will focus on digital safety measures, like avoiding scams and protecting against cyberattacks. Our technology experts already have installed new programs throughout our company’s information system to reduce risk. ------- (143), we all need to understand how the programs work and what to do when a problem arises.\nTo accommodate ------- (144), several workshops will be conducted throughout the upcoming week. You can register for any one of these ------- (145) on our company’s intranet page. Just click on the link for “Safety Training.”\n------- (146). If you are unable to take part in any of the scheduled workshops for any reason, you must inform your supervisor.`,
      "questions": [
        {
          "q_id": 143,
          "options": {"A": "If so", "B": "However", "C": "Otherwise", "D": "In that case"},
          "answer": "B",
          "explanation": "Mặc dù hệ thống đã có chương trình bảo vệ, 'Tuy nhiên' (However) mọi người vẫn cần hiểu cách chúng hoạt động.",
          "tag": "Grammar"
        },
        {
          "q_id": 144,
          "options": {"A": "itself", "B": "his", "C": "whose", "D": "everyone"},
          "answer": "D",
          "explanation": "'To accommodate everyone' (để đáp ứng/phù hợp cho mọi người), nên công ty tổ chức nhiều buổi đào tạo.",
          "tag": "Vocabulary"
        },
        {
          "q_id": 145,
          "options": {"A": "sessions", "B": "positions", "C": "conferences", "D": "competitions"},
          "answer": "A",
          "explanation": "'Sessions' thường dùng để chỉ các buổi (phiên) làm việc của một workshop hoặc hội thảo.",
          "tag": "Vocabulary"
        },
        {
          "q_id": 146,
          "options": {
            "C": "Please make every effort to sign up.",
            "...": "..."
          },
          "answer": "C",
          "explanation": "Đây là lời nhắc nhở/kêu gọi mọi người đăng ký, phù hợp với ngữ cảnh của một thông báo đào tạo bắt buộc.",
          "tag": "Sentence Insertion"
        }
      ]
    }
],
      part_7: []
    }
  },
    {
    metadata: { year: 2024, test_no: 6, series: "ETS TOEIC 2024" },
    content: {
      "part_5": [
  {
    "q_id": 101,
    "question_text": "The new policy allows employees to set ------- own working hours under certain conditions.",
    "options": { "A": "they", "B": "their", "C": "theirs", "D": "themselves" },
    "answer": "B",
    "explanation": "Cần một tính từ sở hữu 'their' đứng trước danh từ 'own working hours' để bổ nghĩa cho chủ thể 'employees'.",
    "tag": "Grammar"
  },
  {
    "q_id": 102,
    "question_text": "Based on last year’s data, Paik Company increased its sales projections ------- the current year.",
    "options": { "A": "when", "B": "for", "C": "if", "D": "or" },
    "answer": "B",
    "explanation": "Giới từ 'for' dùng để chỉ mục tiêu thời gian: dự báo doanh số 'cho' năm hiện tại.",
    "tag": "Vocabulary"
  },
  {
    "q_id": 103,
    "question_text": "Harbison’s Department Store interviews applicants ------- standard business hours.",
    "options": { "A": "among", "B": "beside", "C": "during", "D": "onto" },
    "answer": "C",
    "explanation": "Giới từ 'during' chỉ thời gian diễn ra sự việc: phỏng vấn 'trong suốt' giờ hành chính.",
    "tag": "Vocabulary"
  },
  {
    "q_id": 104,
    "question_text": "Takealong Industries’ commercial propane heaters deliver more warmth to ------- areas.",
    "options": { "A": "wideness", "B": "widen", "C": "wider", "D": "widely" },
    "answer": "C",
    "explanation": "Cần tính từ so sánh hơn 'wider' để bổ nghĩa cho danh từ 'areas', mang nghĩa 'các khu vực rộng hơn'.",
    "tag": "Grammar"
  },
  {
    "q_id": 105,
    "question_text": "By switching to new project-management software, the editorial team has ------- improved its publication processes.",
    "options": { "A": "great", "B": "greatly", "C": "greater", "D": "greatest" },
    "answer": "B",
    "explanation": "Trạng từ 'greatly' bổ nghĩa cho động từ phân từ 'improved' để chỉ mức độ cải thiện lớn.",
    "tag": "Grammar"
  },
  {
    "q_id": 106,
    "question_text": "The search committee ------- three candidates for the chief executive position.",
    "options": { "A": "nominating", "B": "nomination", "C": "has nominated", "D": "has been nominated" },
    "answer": "C",
    "explanation": "Chủ ngữ số ít 'committee' cần một động từ chia ở dạng chủ động. Thì hiện tại hoàn thành 'has nominated' phù hợp nhất.",
    "tag": "Grammar"
  },
  {
    "q_id": 107,
    "question_text": "------- a two-month delay, new carpeting was installed in the east conference room.",
    "options": { "A": "Additionally", "B": "Although", "C": "After", "D": "Furthermore" },
    "answer": "C",
    "explanation": "Giới từ 'After' chỉ trình tự thời gian: 'Sau' hai tháng trì hoãn, thảm mới đã được lắp.",
    "tag": "Vocabulary"
  },
  {
    "q_id": 108,
    "question_text": "To boost -------, the Makeup Artist Academy is offering a free starter kit to new students.",
    "options": { "A": "enroll", "B": "enrolled", "C": "enrolling", "D": "enrollment" },
    "answer": "D",
    "explanation": "Sau động từ 'boost' cần một danh từ tân ngữ. 'Enrollment' nghĩa là sự đăng ký nhập học.",
    "tag": "Grammar"
  },
  {
    "q_id": 109,
    "question_text": "Because Lectula Furniture Company ------- its delivery times, we were able to set a firm opening date for the new hotel.",
    "options": { "A": "guarantees", "B": "advises", "C": "requires", "D": "delays" },
    "answer": "A",
    "explanation": "Động từ 'guarantees' (đảm bảo) phù hợp với ngữ cảnh có thể ấn định ngày khai trương nhờ biết chắc thời gian giao hàng.",
    "tag": "Vocabulary"
  },
  {
    "q_id": 110,
    "question_text": "The computer technician was very ------- but was not able to solve my problem.",
    "options": { "A": "friendly", "B": "neutral", "C": "possible", "D": "frequent" },
    "answer": "A",
    "explanation": "Tính từ 'friendly' (thân thiện) tạo sự tương phản với việc kỹ thuật viên không giải quyết được vấn đề.",
    "tag": "Vocabulary"
  },
  {
    "q_id": 111,
    "question_text": "To make room for conference attendees, ------- visitors to the office building should use the rear parking area tomorrow.",
    "options": { "A": "regular", "B": "regularly", "C": "regularize", "D": "regularity" },
    "answer": "A",
    "explanation": "Cần một tính từ đứng trước danh từ 'visitors' để bổ nghĩa. 'Regular visitors' nghĩa là khách vãng lai thường xuyên.",
    "tag": "Grammar"
  },
  {
    "q_id": 112,
    "question_text": "Employees must wear their security badge in a way that is ------- visible when in the building.",
    "options": { "A": "clearly", "B": "recently", "C": "evenly", "D": "secretly" },
    "answer": "A",
    "explanation": "Trạng từ 'clearly' (một cách rõ ràng) bổ nghĩa cho tính từ 'visible', yêu cầu nhân viên đeo thẻ sao cho dễ nhìn thấy.",
    "tag": "Vocabulary"
  },
  {
    "q_id": 113,
    "question_text": "Ms. Phon wanted to attend the gallery opening; -------, the inclement weather made that impossible.",
    "options": { "A": "therefore", "B": "following", "C": "however", "D": "for example" },
    "answer": "C",
    "explanation": "Trạng từ liên kết 'however' (tuy nhiên) dùng để nối hai mệnh đề có ý nghĩa tương phản.",
    "tag": "Vocabulary"
  },
  {
    "q_id": 114,
    "question_text": "Giving leadership tasks to warehouse package handlers often ------- them to work more productively.",
    "options": { "A": "adopts", "B": "reinforces", "C": "motivates", "D": "attracts" },
    "answer": "C",
    "explanation": "Động từ 'motivates' (thúc đẩy) phù hợp với việc giao nhiệm vụ lãnh đạo để nhân viên làm việc hiệu quả hơn.",
    "tag": "Vocabulary"
  },
  {
    "q_id": 115,
    "question_text": "Kaybing Construction works ------- on large commercial projects in the Newfoundland area.",
    "options": { "A": "exclusively", "B": "exclusive", "C": "exclusivity", "D": "exclusives" },
    "answer": "A",
    "explanation": "Trạng từ 'exclusively' bổ nghĩa cho động từ 'works' để chỉ sự tập trung duy nhất vào một lĩnh vực.",
    "tag": "Grammar"
  },
  {
    "q_id": 116,
    "question_text": "Carly Logan plans -------, so Alan Zill has volunteered to be the stamp club’s next treasurer.",
    "options": { "A": "resigning", "B": "to resign", "C": "resigns", "D": "to have resigned" },
    "answer": "B",
    "explanation": "Cấu trúc 'plan + to-V' (lên kế hoạch làm gì đó). Ở đây là kế hoạch từ chức.",
    "tag": "Grammar"
  },
  {
    "q_id": 117,
    "question_text": "Although the housing market slowed ------- the summer months, sales began to pick up again in the autumn.",
    "options": { "A": "apart", "B": "even", "C": "only", "D": "over" },
    "answer": "D",
    "explanation": "Giới từ 'over' dùng để chỉ một giai đoạn thời gian: 'suốt' những tháng hè.",
    "tag": "Vocabulary"
  },
  {
    "q_id": 118,
    "question_text": "To remain fully functional, the exercise machines need to be cleaned -------.",
    "options": { "A": "rather", "B": "almost", "C": "routinely", "D": "openly" },
    "answer": "C",
    "explanation": "Trạng từ 'routinely' (định kỳ/thường xuyên) chỉ sự bảo trì máy móc để đảm bảo hoạt động tốt.",
    "tag": "Vocabulary"
  },
  {
    "q_id": 119,
    "question_text": "The extended warranty is good for ten years or 100,000 miles, ------- comes first.",
    "options": { "A": "whoever", "B": "either", "C": "whichever", "D": "another" },
    "answer": "C",
    "explanation": "Đại từ liên hệ 'whichever' (bất cứ cái nào) dùng để chọn giữa hai điều kiện thời gian hoặc quãng đường.",
    "tag": "Grammar"
  },
  {
    "q_id": 120,
    "question_text": "Atlantic Grocers must offer online shopping options or ------- losing customers to other supermarkets.",
    "options": { "A": "risk", "B": "protect", "C": "cancel", "D": "hold" },
    "answer": "A",
    "explanation": "Cấu trúc 'risk + V-ing' (có nguy cơ bị gì đó). Ở đây là nguy cơ mất khách hàng.",
    "tag": "Vocabulary"
  },
  {
    "q_id": 121,
    "question_text": "------- client is assigned to a personal financial adviser to whom inquiries should be addressed.",
    "options": { "A": "Each", "B": "All", "C": "Some", "D": "Most" },
    "answer": "A",
    "explanation": "'Each' đi với danh từ số ít 'client' để chỉ từng cá nhân khách hàng.",
    "tag": "Grammar"
  },
  {
    "q_id": 122,
    "question_text": "Mr. Singh wants to form a ------- to explore some employee reward programs.",
    "options": { "A": "supervisor", "B": "suggestion", "C": "notification", "D": "committee" },
    "answer": "D",
    "explanation": "Cụm danh từ 'form a committee' nghĩa là thành lập một ủy ban/nhóm làm việc.",
    "tag": "Vocabulary"
  },
  {
    "q_id": 123,
    "question_text": "Please provide your phone number ------- the delivery driver needs to contact you.",
    "options": { "A": "whereas", "B": "despite", "C": "if not", "D": "in case" },
    "answer": "D",
    "explanation": "Liên từ 'in case' (trong trường hợp) dùng để chỉ sự chuẩn bị cho một sự việc có thể xảy ra.",
    "tag": "Vocabulary"
  },
  {
    "q_id": 124,
    "question_text": "------- of Pondview Tower are required to make rent payments on or before the first day of every month.",
    "options": { "A": "Owners", "B": "Buyers", "C": "Tourists", "D": "Tenants" },
    "answer": "D",
    "explanation": "Danh từ 'Tenants' (người thuê nhà) phù hợp nhất với hành động trả tiền thuê nhà (rent payments).",
    "tag": "Vocabulary"
  },
  {
    "q_id": 125,
    "question_text": "Likoni Hospitality Group, one of Mombasa’s largest employers, has a ------- impact on the local economy.",
    "options": { "A": "considerably", "B": "considerable", "C": "considering", "D": "consideration" },
    "answer": "B",
    "explanation": "Cần một tính từ đứng trước danh từ 'impact'. 'Considerable impact' nghĩa là tác động đáng kể.",
    "tag": "Grammar"
  },
  {
    "q_id": 126,
    "question_text": "------- best sellers, Booksters offers a wide selection of classics and biographies.",
    "options": { "A": "Besides", "B": "Somewhat", "C": "Whose", "D": "Becoming" },
    "answer": "A",
    "explanation": "Giới từ 'Besides' (bên cạnh/ngoài ra) dùng để chỉ việc cung cấp thêm các loại sách khác ngoài sách bán chạy.",
    "tag": "Vocabulary"
  },
  {
    "q_id": 127,
    "question_text": "New food regulations require all Dean’s Burgers packaging to contain the notice that ------- undercooked meat can be harmful.",
    "options": { "A": "consumer", "B": "consumption", "C": "consumes", "D": "consuming" },
    "answer": "D",
    "explanation": "Danh động từ 'consuming' đóng vai trò chủ ngữ của mệnh đề phụ sau 'that', chỉ hành động tiêu thụ thịt chưa chín.",
    "tag": "Grammar"
  },
  {
    "q_id": 128,
    "question_text": "Each Genutria snack bar contains as much protein as two eggs, with none ------- the fat and cholesterol.",
    "options": { "A": "of", "B": "by", "C": "out", "D": "minus" },
    "answer": "A",
    "explanation": "Cấu trúc 'none of' (không có cái nào trong số...) dùng với danh từ xác định 'the fat and cholesterol'.",
    "tag": "Grammar"
  },
  {
    "q_id": 129,
    "question_text": "Fisko eyeglass frames come in various -------, including round, square, and oval.",
    "options": { "A": "sights", "B": "methods", "C": "shapes", "D": "materials" },
    "answer": "C",
    "explanation": "Danh từ 'shapes' (hình dạng) bao gồm các ví dụ như tròn (round), vuông (square), và bầu dục (oval).",
    "tag": "Vocabulary"
  },
  {
    "q_id": 130,
    "question_text": "The CEO wants a greater portion of next year’s budget ------- to research and development.",
    "options": { "A": "allocated", "B": "imprinted", "C": "economized", "D": "rationalized" },
    "answer": "A",
    "explanation": "Quá khứ phân từ 'allocated' đóng vai trò tính từ bị động: ngân sách 'được phân bổ' cho nghiên cứu.",
    "tag": "Vocabulary"
  }
],
"part_6": [
  {
    "group_id": "P6_G01",
    "passage": `Estella Guitar Lessons: Play with the Best\nWhether you play acoustic guitar ------- (131) electric, taking lessons with an Estella Guitar teacher is the best way to improve your ability. With years of experience crafting playing techniques, ------- (132) qualified instructors can tailor lessons to focus on the skills you want to fine-tune. Receive a customized learning plan to set goals and overcome the challenges that cause many players to get discouraged. ------- (133). An Estella Guitar teacher will help boost your confidence.\nAt Estella Guitar, we believe that playing music is a way of expressing yourself. ------- (134), we will help you go beyond the familiar chords and riffs to develop your own identity as a musician. Ready to get started? Visit www.estellaguitar.com/lessons to get matched with the right instructor for you!`,
    "questions": [
      {
        "q_id": 131,
        "options": { "A": "is", "B": "or", "C": "likely", "D": "from" },
        "answer": "B",
        "explanation": "Cấu trúc 'Whether... or' (liệu là cái này hay cái kia).",
        "tag": "Grammar"
      },
      {
        "q_id": 132,
        "options": { "A": "our", "B": "ourselves", "C": "ours", "D": "us" },
        "answer": "A",
        "explanation": "Cần tính từ sở hữu 'our' đứng trước cụm danh từ 'qualified instructors'.",
        "tag": "Grammar"
      },
      {
        "q_id": 133,
        "options": {
          "A": "Contact a technician...",
          "B": "A high-quality instrument...",
          "C": "The best resource for you as a learner is an expert to guide your progress.",
          "D": "It took them several years..."
        },
        "answer": "C",
        "explanation": "Câu này phù hợp với việc nói về việc học tập với một giáo viên hướng dẫn chuyên gia.",
        "tag": "Sentence Insertion"
      },
      {
        "q_id": 134,
        "options": { "A": "So far", "B": "With that in mind", "C": "On a different note", "D": "At that point" },
        "answer": "B",
        "explanation": "Cụm 'With that in mind' (với suy nghĩ đó/với mục tiêu đó) dùng để liên kết niềm tin với hành động giúp đỡ học viên.",
        "tag": "Vocabulary"
      }
    ]
  },
  {
    "group_id": "P6_G02",
    "passage": `In-home delivery takes approximately one week after an order is shipped from our warehouse.\nThe actual time may vary based on the location of your ------- (135) and your availability for accepting the item. Vernico Furniture will work with a carrier ------- (136) an appointment that is convenient for you. Typical hours are Monday through Friday between 8 A.M. and 5 P.M., ------- (137) evening appointments can often be arranged. Upon arrival at your home, the item will be placed in the location you desire. ------- (138). Assembly is included as well.`,
    "questions": [
      {
        "q_id": 135,
        "options": { "A": "garden", "B": "records", "C": "residence", "D": "organization" },
        "answer": "C",
        "explanation": "Dịch vụ giao hàng tận nhà (In-home delivery) phụ thuộc vào vị trí của 'residence' (nơi cư trú/nhà).",
        "tag": "Vocabulary"
      },
      {
        "q_id": 136,
        "options": { "A": "to schedule", "B": "is scheduling", "C": "as a schedule", "D": "that scheduled" },
        "answer": "A",
        "explanation": "Cấu trúc 'work with someone to-V' chỉ mục đích: làm việc với hãng vận chuyển 'để' lên lịch.",
        "tag": "Grammar"
      },
      {
        "q_id": 137,
        "options": { "A": "if so", "B": "when", "C": "though", "D": "in the meantime" },
        "answer": "C",
        "explanation": "Liên từ 'though' (mặc dù) chỉ sự nhượng bộ/ngoại lệ đối với giờ làm việc thông thường.",
        "tag": "Vocabulary"
      },
      {
        "q_id": 138,
        "options": {
          "A": "When buying a home...",
          "B": "Refinishing furniture...",
          "C": "Furnished apartments...",
          "D": "All packing materials will be removed."
        },
        "answer": "D",
        "explanation": "Thông báo về việc thu dọn vật liệu đóng gói sau khi lắp đặt nội thất.",
        "tag": "Sentence Insertion"
      }
    ]
  },
  {
    "group_id": "P6_G03",
    "passage": `To: Thao Pham\nFrom: Leena Montoya\nSubject: Subscription\nDear Mr. Pham,\n------- (139). Your subscription to Medical Innovations Quarterly has been canceled. ------- (140) May 1, you will no longer receive the print edition.\nWe hope that you will consider once again becoming a ------- (141) of our publications. Academe Media publishes many high-quality scientific journals in addition to Medical Innovations Quarterly. Should you wish to subscribe to one by May 31, we can offer you a two-year subscription at the annual rate. Visit www.academemedia.com/shop and enter the code DOUBLE ------- (142) checkout.`,
    "questions": [
      {
        "q_id": 139,
        "options": { "A": "Thank you...", "B": "We have processed your request.", "C": "This is a payment reminder.", "D": "Please contact us..." },
        "answer": "B",
        "explanation": "Câu mở đầu báo nhận đã xử lý yêu cầu hủy đăng ký của khách hàng.",
        "tag": "Sentence Insertion"
      },
      {
        "q_id": 140,
        "options": { "A": "Starts", "B": "Started", "C": "Starter", "D": "Starting" },
        "answer": "D",
        "explanation": "Phân từ 'Starting' dùng để chỉ một mốc thời gian bắt đầu một hiệu lực.",
        "tag": "Grammar"
      },
      {
        "q_id": 141,
        "options": { "A": "distributor", "B": "producer", "C": "reader", "D": "teacher" },
        "answer": "C",
        "explanation": "Người mua tạp chí/tờ báo là một 'reader' (độc giả).",
        "tag": "Vocabulary"
      },
      {
        "q_id": 142,
        "options": { "A": "until", "B": "upon", "C": "without", "D": "next" },
        "answer": "B",
        "explanation": "Giới từ 'upon' chỉ thời điểm: thực hiện mã giảm giá 'ngay khi' thanh toán.",
        "tag": "Vocabulary"
      }
    ]
  },
  {
    "group_id": "P6_G04",
    "passage": `In a commercial kitchen, all refrigerators are required to have a thermometer that ------- (143) from 0°F (-18°C) to 220°F (104°C). To prevent the growth of bacteria, refrigerated foods must be stored at 41°F (5°C) or below. The head chef is responsible for checking these thermometers throughout the day to ensure that the kitchen is in compliance at all times. Also important to consider is ------- (144).\nThermometers should always be located in the warmest spot in the refrigerator. ------- (145). This location is also appropriate because it allows the thermometer to be easily ------- (146) as soon as the door is opened.`,
    "questions": [
      {
        "q_id": 143,
        "options": { "A": "ranges", "B": "ranger", "C": "ranged", "D": "ranging" },
        "answer": "A",
        "explanation": "Động từ 'ranges' chia ở ngôi thứ ba số ít để bổ nghĩa cho 'thermometer'.",
        "tag": "Grammar"
      },
      {
        "q_id": 144,
        "options": { "A": "size", "B": "safety", "C": "reliability", "D": "placement" },
        "answer": "D",
        "explanation": "Nội dung tiếp theo nói về vị trí đặt nhiệt kế, nên 'placement' (vị trí đặt) là phù hợp.",
        "tag": "Vocabulary"
      },
      {
        "q_id": 145,
        "options": {
          "A": "Remove them carefully.",
          "B": "This is typically inside the door.",
          "C": "It should be kept cool...",
          "D": "They can also be purchased..."
        },
        "answer": "B",
        "explanation": "Giải thích cụ thể vị trí 'warmest spot' (nơi ấm nhất) thường là bên trong cửa.",
        "tag": "Sentence Insertion"
      },
      {
        "q_id": 146,
        "options": { "A": "sold", "B": "seen", "C": "repaired", "D": "removed" },
        "answer": "B",
        "explanation": "Vị trí đó giúp nhiệt kế dễ dàng được 'seen' (nhìn thấy) ngay khi mở cửa.",
        "tag": "Vocabulary"
      }
    ]
  }
],
      part_7: []
    }
  },
  {
    metadata: { year: 2024, test_no: 7, series: "ETS TOEIC 2024" },
    content: {
      "part_5": [
    {
      "q_id": 101,
      "question_text": "Passengers must keep ------- boarding passes and luggage with them at all times.",
      "options": { "A": "their", "B": "his", "C": "my", "D": "our" },
      "answer": "A",
      "explanation": "Cần tính từ sở hữu 'their' để bổ nghĩa cho danh từ số nhiều 'Passengers'.",
      "tag": "Grammar"
    },
    {
      "q_id": 102,
      "question_text": "The company’s policy allows business travel by ------- train and airplane.",
      "options": { "A": "both", "B": "either", "C": "further", "D": "hardly" },
      "answer": "A",
      "explanation": "Cấu trúc 'both A and B' (cả A và B).",
      "tag": "Grammar"
    },
    {
      "q_id": 103,
      "question_text": "The production technicians are ------- for maintaining our factory equipment.",
      "options": { "A": "responsibly", "B": "responsible", "C": "responsibility", "D": "responsibilities" },
      "answer": "B",
      "explanation": "Cấu trúc 'be responsible for' (chịu trách nhiệm cho việc gì).",
      "tag": "Grammar"
    },
    {
      "q_id": 104,
      "question_text": "The team found Ms. Dietrich’s advice on managing office staff to be especially -------.",
      "options": { "A": "helpful", "B": "thankful", "C": "regular", "D": "extra" },
      "answer": "A",
      "explanation": "Tính từ 'helpful' (có ích) phù hợp để mô tả lời khuyên (advice).",
      "tag": "Vocabulary"
    },
    {
      "q_id": 105,
      "question_text": "The film crew ------- in Namibia earlier this week to prepare for the promotional tourism campaign.",
      "options": { "A": "to arrive", "B": "having arrived", "C": "arrived", "D": "arriving" },
      "answer": "C",
      "explanation": "Dấu hiệu 'earlier this week' cho thấy hành động đã xảy ra, cần động từ chia thì quá khứ đơn 'arrived'.",
      "tag": "Grammar"
    },
    {
      "q_id": 106,
      "question_text": "The committee expects to be finished with the negotiations ------- 4:00 P.M.",
      "options": { "A": "over", "B": "until", "C": "on", "D": "by" },
      "answer": "D",
      "explanation": "Giới từ 'by' dùng để chỉ một mốc thời gian hạn chót (trước hoặc tại thời điểm đó).",
      "tag": "Vocabulary"
    },
    {
      "q_id": 107,
      "question_text": "United Medical Board is an ------- panel of physicians that makes recommendations for hospital improvements.",
      "options": { "A": "expertise", "B": "expert", "C": "expertness", "D": "expertly" },
      "answer": "B",
      "explanation": "Cần tính từ 'expert' (chuyên gia) để bổ nghĩa cho danh từ 'panel'.",
      "tag": "Grammar"
    },
    {
      "q_id": 108,
      "question_text": "Digital payments are ------- accepted at all Southern Coach bus stations.",
      "options": { "A": "tightly", "B": "far", "C": "after", "D": "now" },
      "answer": "D",
      "explanation": "Trạng từ 'now' (hiện nay) chỉ một tình trạng hiện tại.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 109,
      "question_text": "The fund-raising event for the library was successful, ------- the author’s reading was canceled.",
      "options": { "A": "seldom", "B": "though", "C": "rarely", "D": "secondly" },
      "answer": "B",
      "explanation": "Liên từ 'though' (mặc dù) nối hai vế có ý nghĩa tương phản.",
      "tag": "Grammar"
    },
    {
      "q_id": 110,
      "question_text": "To ------- the status of your delivery, select the Track Order option in the drop-down menu.",
      "options": { "A": "place", "B": "want", "C": "check", "D": "look" },
      "answer": "C",
      "explanation": "Động từ 'check' (kiểm tra) phù hợp với ngữ cảnh kiểm tra trạng thái giao hàng.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 111,
      "question_text": "Our project-based mentoring approach enables executives with limited time ------- junior staff.",
      "options": { "A": "to counsel", "B": "should counsel", "C": "counseling", "D": "counseled" },
      "answer": "A",
      "explanation": "Cấu trúc 'enable someone to do something' (cho phép/giúp ai làm gì).",
      "tag": "Grammar"
    },
    {
      "q_id": 112,
      "question_text": "Mr. Yerkes is updating our quarterly sales ------- after receiving the final report from the Boston office.",
      "options": { "A": "measures", "B": "grounds", "C": "instructions", "D": "figures" },
      "answer": "D",
      "explanation": "Danh từ 'figures' (số liệu) thường dùng trong cụm 'sales figures' (số liệu doanh thu).",
      "tag": "Vocabulary"
    },
    {
      "q_id": 113,
      "question_text": "------- up your desk with beautiful paper products from Norimi Stationery.",
      "options": { "A": "Brightens", "B": "Brighten", "C": "Brightened", "D": "Brightening" },
      "answer": "B",
      "explanation": "Câu mệnh lệnh bắt đầu bằng động từ nguyên thể 'Brighten' (Làm sáng bừng/Làm đẹp).",
      "tag": "Grammar"
    },
    {
      "q_id": 114,
      "question_text": "Ultitemp, an application that allows users to ------- room temperature remotely, is currently available only in Asia.",
      "options": { "A": "control", "B": "impose", "C": "announce", "D": "encourage" },
      "answer": "A",
      "explanation": "Động từ 'control' (điều khiển) phù hợp với ngữ cảnh điều chỉnh nhiệt độ phòng.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 115,
      "question_text": "------- the cost of travel, the cost of attending the conference is reasonable.",
      "options": { "A": "Along", "B": "Even if", "C": "Aside from", "D": "Because" },
      "answer": "C",
      "explanation": "Cụm 'Aside from' (Ngoài... ra/Ngoại trừ) chỉ sự tách biệt chi phí đi lại và chi phí tham dự.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 116,
      "question_text": "Customers are ------- anticipating the latest model pickup truck from Askio Automobiles.",
      "options": { "A": "eagerly", "B": "sharply", "C": "voluntarily", "D": "rapidly" },
      "answer": "A",
      "explanation": "Trạng từ 'eagerly' (háo hức) thường đi với 'anticipating' (mong đợi).",
      "tag": "Vocabulary"
    },
    {
      "q_id": 117,
      "question_text": "Once you have Mr. Garcia’s -------, please post the job listing to the usual Web sites.",
      "options": { "A": "approve", "B": "approves", "C": "approval", "D": "approving" },
      "answer": "C",
      "explanation": "Cần danh từ 'approval' (sự chấp thuận) sau sở hữu cách 'Mr. Garcia’s'.",
      "tag": "Grammar"
    },
    {
      "q_id": 118,
      "question_text": "Dabby’s Restaurant broadened its customer base by making ------- changes to its menu.",
      "options": { "A": "extensive", "B": "precious", "C": "commercial", "D": "accurate" },
      "answer": "A",
      "explanation": "Tính từ 'extensive' (sâu rộng/lớn) mô tả mức độ thay đổi thực đơn.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 119,
      "question_text": "The redesigned intersection ------- shortens the street-crossing distance for pedestrians, making it safer.",
      "options": { "A": "effectively", "B": "effects", "C": "effective", "D": "effected" },
      "answer": "A",
      "explanation": "Cần trạng từ 'effectively' (một cách hiệu quả) để bổ nghĩa cho động từ 'shortens'.",
      "tag": "Grammar"
    },
    {
      "q_id": 120,
      "question_text": "Workshop attendees are asked to ------- from asking questions until the end of the formal presentation.",
      "options": { "A": "refrain", "B": "forbid", "C": "retreat", "D": "hesitate" },
      "answer": "A",
      "explanation": "Cấu trúc 'refrain from doing something' (kiềm chế/nhịn làm việc gì đó).",
      "tag": "Vocabulary"
    },
    {
      "q_id": 121,
      "question_text": "The Tamano Foundation accepts grant ------- related to a wide range of scientific research.",
      "options": { "A": "proposes", "B": "proposed", "C": "proposals", "D": "proposing" },
      "answer": "C",
      "explanation": "Cần danh từ số nhiều 'proposals' (các đề xuất) làm tân ngữ của 'accepts'.",
      "tag": "Grammar"
    },
    {
      "q_id": 122,
      "question_text": "Gateway Electronics will cancel any orders that have not been picked up ------- five days.",
      "options": { "A": "about", "B": "during", "C": "within", "D": "from" },
      "answer": "C",
      "explanation": "Giới từ 'within' (trong vòng) chỉ thời hạn thời gian.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 123,
      "question_text": "------- who arrives at the company parking garage after 10:00 A.M. must contact security for an access code.",
      "options": { "A": "Each", "B": "Those", "C": "Everything", "D": "Anyone" },
      "answer": "D",
      "explanation": "Đại từ 'Anyone' (Bất kỳ ai) dùng cho chủ ngữ số ít đi với 'arrives'.",
      "tag": "Grammar"
    },
    {
      "q_id": 124,
      "question_text": "To get to the conference room, turn left ------- after passing the employee cafeteria.",
      "options": { "A": "immediately", "B": "recently", "C": "originally", "D": "lately" },
      "answer": "A",
      "explanation": "Trạng từ 'immediately' (ngay lập tức) trong cụm 'turn left immediately'.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 125,
      "question_text": "The wellness ------- at Trayer Media Group directly led to greater employee satisfaction with the company.",
      "options": { "A": "initiate", "B": "initiator", "C": "initiated", "D": "initiative" },
      "answer": "D",
      "explanation": "Danh từ 'initiative' (sáng kiến/chương trình) đóng vai trò chủ ngữ.",
      "tag": "Grammar"
    },
    {
      "q_id": 126,
      "question_text": "We will keep producing our signature shoe designs ------- there is demand for them.",
      "options": { "A": "or else", "B": "as long as", "C": "as well as", "D": "in between" },
      "answer": "B",
      "explanation": "Cụm 'as long as' (miễn là) chỉ điều kiện thời gian.",
      "tag": "Grammar"
    },
    {
      "q_id": 127,
      "question_text": "Regular applications of fertilizer improve seedling health and ------- enhance the growth of leafy vegetables.",
      "options": { "A": "drama", "B": "dramatic", "C": "dramatically", "D": "dramatize" },
      "answer": "C",
      "explanation": "Cần trạng từ 'dramatically' (một cách đáng kể) để bổ nghĩa cho động từ 'enhance'.",
      "tag": "Grammar"
    },
    {
      "q_id": 128,
      "question_text": "Wantner Manufacturing received this year’s Top Employer Award in ------- of its people-centered workplace environment.",
      "options": { "A": "service", "B": "accordance", "C": "recognition", "D": "dedication" },
      "answer": "C",
      "explanation": "Cụm 'in recognition of' (để công nhận/ghi nhận cho cái gì đó).",
      "tag": "Vocabulary"
    },
    {
      "q_id": 129,
      "question_text": "The editor noted some ------- content and marked the text to be deleted.",
      "options": { "A": "repetition", "B": "repetitious", "C": "repetitiously", "D": "repetitiousness" },
      "answer": "B",
      "explanation": "Cần tính từ 'repetitiously' (lặp đi lặp lại) để bổ nghĩa cho danh từ 'content'.",
      "tag": "Grammar"
    },
    {
      "q_id": 130,
      "question_text": "Bay City Zoo members get ------- access to members-only activities, such as after-hours guided tours.",
      "options": { "A": "exclusive", "B": "unknown", "C": "creative", "D": "previous" },
      "answer": "A",
      "explanation": "Tính từ 'exclusive' (độc quyền/riêng biệt) phù hợp với ngữ cảnh dành riêng cho thành viên.",
      "tag": "Vocabulary"
    }
],
"part_6": [
    {
      "group_id": "P6_G01",
      "passage": `Dear Ms. Richter, Thank you for coming to our office to interview for the assistant import manager position last week. We were impressed with your credentials and enthusiasm. ------- (131) we are moving ahead with another candidate, we would like to offer you a different position that just became available: logistics coordinator. ------- (132). The attached document contains the detailed job description and pay rate. This ------- (133) has not yet been posted publicly. If you are ------- (134), please let me know by the end of this week.`,
      "questions": [
        {
          "q_id": 131,
          "options": { "A": "Rather", "B": "Although", "C": "Similarly", "D": "Consequently" },
          "answer": "B",
          "explanation": "'Although' (Mặc dù) dùng để chỉ sự nhượng bộ giữa việc chọn ứng viên khác và việc mời vị trí mới.",
          "tag": "Grammar"
        },
        {
          "q_id": 132,
          "options": { "D": "Your experience and skill set make you a great fit.", "...": "..." },
          "answer": "D",
          "explanation": "Câu này đưa ra lý do tại sao họ mời cô ấy vị trí điều phối viên logistics.",
          "tag": "Sentence Insertion"
        },
        {
          "q_id": 133,
          "options": { "A": "opportunity", "B": "authorization", "C": "application", "D": "capacity" },
          "answer": "A",
          "explanation": "Danh từ 'opportunity' (cơ hội) dùng để chỉ vị trí công việc mới.",
          "tag": "Vocabulary"
        },
        {
          "q_id": 134,
          "options": { "A": "interest", "B": "interests", "C": "interested", "D": "interesting" },
          "answer": "C",
          "explanation": "Tính từ đuôi -ed 'interested' (quan tâm) mô tả cảm xúc của người nhận.",
          "tag": "Grammar"
        }
      ]
    },
    {
      "group_id": "P6_G02",
      "passage": `The Oakville Horticulture Club ------- (135) a plant sale on Saturday, 9 September. The sale will be held from 9:00 A.M. to 4:00 P.M. at the Oakville Community Centre at 478 Hill Avenue. There will be great deals on hanging baskets, grasses, and herbs. ------- (136). We ------- (137) have a delicious selection of fruits and vegetables available for purchase. Enjoy live talks and demonstrations ------- (138) the day. For more information, visit the Oakville Horticulture Web site.`,
      "questions": [
        {
          "q_id": 135,
          "options": { "A": "host", "B": "hosted", "C": "is hosting", "D": "has hosted" },
          "answer": "C",
          "explanation": "Dùng hiện tại tiếp diễn 'is hosting' để chỉ một sự kiện đã lên lịch trong tương lai gần.",
          "tag": "Grammar"
        },
        {
          "q_id": 136,
          "options": { "A": "Come early to get the best selection.", "...": "..." },
          "answer": "A",
          "explanation": "Lời khuyên 'Come early' phù hợp với thông báo về buổi bán cây.",
          "tag": "Sentence Insertion"
        },
        {
          "q_id": 137,
          "options": { "A": "later", "B": "also", "C": "nearly", "D": "merely" },
          "answer": "B",
          "explanation": "Trạng từ 'also' (cũng) dùng để bổ sung thêm các mặt hàng khác là trái cây và rau củ.",
          "tag": "Vocabulary"
        },
        {
          "q_id": 138,
          "options": { "A": "within", "B": "forward", "C": "following", "D": "throughout" },
          "answer": "D",
          "explanation": "Giới từ 'throughout' (suốt/khắp) chỉ thời gian diễn ra các buổi trình diễn trong ngày.",
          "tag": "Vocabulary"
        }
      ]
    },
    {
      "group_id": "P6_G03",
      "passage": `July 2. Dear Mr. Arakaki: I am writing to inform you of scheduled road maintenance on Briggs Avenue. Beginning on July 15, Briggs Avenue ------- (139) reduced to one lane from Elm Street to Bay Road. ------- (140). Although your ------- (141) is not located in this section of Briggs Avenue, traffic on most of the street will move more slowly than usual while work is being performed. You may ------- (142) consider advising your employees to take alternate routes to work during this time.`,
      "questions": [
        {
          "q_id": 139,
          "options": { "A": "was", "B": "will be", "C": "can be", "D": "has been" },
          "answer": "B",
          "explanation": "Thì tương lai đơn 'will be' dùng cho thông báo về kế hoạch bảo trì đường bắt đầu vào 15/7.",
          "tag": "Grammar"
        },
        {
          "q_id": 140,
          "options": { "C": "Please refer to the enclosed map of the affected area.", "...": "..." },
          "answer": "C",
          "explanation": "Câu này hướng dẫn người nhận xem bản đồ đi kèm để biết khu vực bị ảnh hưởng.",
          "tag": "Sentence Insertion"
        },
        {
          "q_id": 141,
          "options": { "A": "mailbox", "B": "school", "C": "signage", "D": "business" },
          "answer": "D",
          "explanation": "Danh từ 'business' (doanh nghiệp/địa điểm kinh doanh) phù hợp nhất trong thư gửi chủ doanh nghiệp.",
          "tag": "Vocabulary"
        },
        {
          "q_id": 142,
          "options": { "A": "fortunately", "B": "instead", "C": "likewise", "D": "therefore" },
          "answer": "D",
          "explanation": "Trạng từ 'therefore' (do đó) chỉ kết quả của việc giao thông chậm chạp.",
          "tag": "Vocabulary"
        }
      ]
    },
    {
      "group_id": "P6_G04",
      "passage": `(June 3)—After 48 years in its present location on Mayfield’s south side, the Franklin Planetarium is moving to a new home. Construction is underway on the downtown facility, part of a complex that includes the new Natural History Museum. Both ------- (143) are expected to open to the public next September. The current planetarium’s main attraction is a 300-seat theater. ------- (144), a larger theater, the new planetarium will feature an upgraded digital projection system. ------- (145). Visitors will be able ------- (146) the night sky more clearly.`,
      "questions": [
        {
          "q_id": 143,
          "options": { "A": "trails", "B": "buildings", "C": "campuses", "D": "performances" },
          "answer": "B",
          "explanation": "Danh từ 'buildings' (các tòa nhà) dùng để chỉ cung thiên văn và bảo tàng lịch sử.",
          "tag": "Vocabulary"
        },
        {
          "q_id": 144,
          "options": { "A": "In addition to", "B": "In particular", "C": "In agreement with", "D": "For instance" },
          "answer": "A",
          "explanation": "Cụm 'In addition to' (Bên cạnh/Ngoài ra) dùng để bổ sung thông tin về hệ thống chiếu kỹ thuật số.",
          "tag": "Grammar"
        },
        {
          "q_id": 145,
          "options": { "D": "There will be room for three short-term exhibits as well.", "...": "..." },
          "answer": "D",
          "explanation": "Bổ sung thông tin về các phòng trưng bày ngắn hạn trong tòa nhà mới.",
          "tag": "Sentence Insertion"
        },
        {
          "q_id": 146,
          "options": { "A": "to see", "B": "will see", "C": "who saw", "D": "by seeing" },
          "answer": "A",
          "explanation": "Cấu trúc 'be able to do something' (có thể làm gì đó).",
          "tag": "Grammar"
        }
      ]
    }
],
      part_7: []
    }
  },
  {
    metadata: { year: 2024, test_no: 8, series: "ETS TOEIC 2024" },
    content: {
     
  "part_5": [
    {
      "q_id": 101,
      "question_text": "The order is estimated to arrive ------- November 15.",
      "options": { "A": "by", "B": "until", "C": "at", "D": "down" },
      "answer": "A",
      "explanation": "Giới từ 'by' dùng để chỉ một thời hạn chót (trước hoặc tại thời điểm đó).",
      "tag": "Vocabulary"
    },
    {
      "q_id": 102,
      "question_text": "Please make sure that ------- personal belongings are safely stored out of sight.",
      "options": { "A": "you", "B": "yourself", "C": "yours", "D": "your" },
      "answer": "D",
      "explanation": "Cần tính từ sở hữu 'your' đứng trước cụm danh từ 'personal belongings'.",
      "tag": "Grammar"
    },
    {
      "q_id": 103,
      "question_text": "Be sure to fold all the clothes ------- before placing them in bags for customers.",
      "options": { "A": "neatly", "B": "deeply", "C": "highly", "D": "surely" },
      "answer": "A",
      "explanation": "Trạng từ 'neatly' (ngăn nắp/gọn gàng) bổ nghĩa cho hành động 'fold' (gấp).",
      "tag": "Vocabulary"
    },
    {
      "q_id": 104,
      "question_text": "Visitors should not take ------- while touring the restricted areas of the facility.",
      "options": { "A": "photographic", "B": "photographing", "C": "photographs", "D": "photographed" },
      "answer": "C",
      "explanation": "Sau động từ 'take' cần một danh từ tân ngữ. Cụm 'take photographs' nghĩa là chụp ảnh.",
      "tag": "Grammar"
    },
    {
      "q_id": 105,
      "question_text": "The new novel by mystery writer Meredith Delgado will be ------- in bookstores nationwide on July 9.",
      "options": { "A": "regular", "B": "available", "C": "convenient", "D": "completed" },
      "answer": "B",
      "explanation": "Tính từ 'available' (có sẵn/có mặt) phù hợp để nói về việc sách được bày bán.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 106,
      "question_text": "Cashiers should call for an ------- cashier when more than three customers are in line.",
      "options": { "A": "addition", "B": "additions", "C": "additional", "D": "additionally" },
      "answer": "C",
      "explanation": "Cần một tính từ 'additional' (thêm/bổ sung) để bổ nghĩa cho danh từ 'cashier'.",
      "tag": "Grammar"
    },
    {
      "q_id": 107,
      "question_text": "Nga Ho... will take on a new ------- within the Trang Media Group in February.",
      "options": { "A": "view", "B": "access", "C": "role", "D": "session" },
      "answer": "C",
      "explanation": "Cụm 'take on a role' nghĩa là đảm nhận một vai trò/vị trí mới.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 108,
      "question_text": "To prevent the sauce from scorching... stir it ------- with a wooden spoon.",
      "options": { "A": "continues", "B": "continue", "C": "continuously", "D": "continuous" },
      "answer": "C",
      "explanation": "Trạng từ 'continuously' (một cách liên tục) bổ nghĩa cho động từ 'stir' (khuấy).",
      "tag": "Grammar"
    },
    {
      "q_id": 109,
      "question_text": "Naito Travel Agency is ------- experienced guides to lead tours in Japan.",
      "options": { "A": "seeking", "B": "spreading", "C": "working", "D": "focusing" },
      "answer": "A",
      "explanation": "Động từ 'seeking' (tìm kiếm) phù hợp với ngữ cảnh tuyển dụng hướng dẫn viên.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 110,
      "question_text": "------- a mineral-rich spring was discovered nearby, Hotel Denzali became a popular tourist destination.",
      "options": { "A": "That", "B": "After", "C": "How", "D": "Every" },
      "answer": "B",
      "explanation": "Liên từ 'After' (Sau khi) chỉ trình tự thời gian dẫn đến kết quả ở mệnh đề chính.",
      "tag": "Grammar"
    },
    {
      "q_id": 111,
      "question_text": "To save time, download your tickets... ------- arriving at the venue.",
      "options": { "A": "since", "B": "before", "C": "although", "D": "without" },
      "answer": "B",
      "explanation": "Giới từ 'before' (trước khi) chỉ thời điểm cần tải vé.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 112,
      "question_text": "Several companies have already ------- bids to paint logos on our delivery trucks.",
      "options": { "A": "submit", "B": "submission", "C": "submitted", "D": "submitting" },
      "answer": "C",
      "explanation": "Cấu trúc thì hiện tại hoàn thành 'have already + V3/ed'. 'Submitted' là nộp (thầu).",
      "tag": "Grammar"
    },
    {
      "q_id": 113,
      "question_text": "...spring collection gave the ------- a luxurious look.",
      "options": { "A": "marks", "B": "portions", "C": "types", "D": "garments" },
      "answer": "D",
      "explanation": "Danh từ 'garments' (quần áo/đồ may mặc) phù hợp với ngữ cảnh bộ sưu tập thời trang.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 114,
      "question_text": "Please do not share your resident access code with ------- living in communities other than Arbor Hill.",
      "options": { "A": "anyone", "B": "either", "C": "most", "D": "each" },
      "answer": "A",
      "explanation": "Đại từ bất định 'anyone' (bất kỳ ai) dùng trong câu phủ định/mệnh lệnh.",
      "tag": "Grammar"
    },
    {
      "q_id": 115,
      "question_text": "...looking for ways to make people more ------- of the Zintaman brand.",
      "options": { "A": "concise", "B": "aware", "C": "precious", "D": "defined" },
      "answer": "B",
      "explanation": "Cụm 'aware of' (nhận thức/biết đến) dùng để nói về việc quảng bá thương hiệu.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 116,
      "question_text": "All Tayton residents ------- their unwanted appliances at the public works facility for a small fee.",
      "options": { "A": "can discard", "B": "have been discarded", "C": "to be discarding", "D": "discarding" },
      "answer": "A",
      "explanation": "Câu cần một động từ chính chia theo chủ ngữ 'residents'. 'Can discard' (có thể vứt bỏ) ở thể chủ động.",
      "tag": "Grammar"
    },
    {
      "q_id": 117,
      "question_text": "...Manilla Lunchbox has ------- added vegetarian options to its menu.",
      "options": { "A": "extremely", "B": "typically", "C": "finally", "D": "closely" },
      "answer": "C",
      "explanation": "Trạng từ 'finally' (cuối cùng thì) chỉ kết quả mong đợi sau nhiều yêu cầu.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 118,
      "question_text": "...installs gas, oil, and electric furnaces from the industry’s ------- manufacturers.",
      "options": { "A": "leading", "B": "leader", "C": "leads", "D": "leadership" },
      "answer": "A",
      "explanation": "Tính từ 'leading' (hàng đầu) dùng để bổ nghĩa cho danh từ 'manufacturers'.",
      "tag": "Grammar"
    },
    {
      "q_id": 119,
      "question_text": "To reduce stress and ------- productivity, Sciallo Corp. offers free fitness classes...",
      "options": { "A": "distribute", "B": "boost", "C": "sweat", "D": "tone" },
      "answer": "B",
      "explanation": "Động từ 'boost' (thúc đẩy/tăng cường) phù hợp để nói về năng suất lao động.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 120,
      "question_text": "Yoshimi Fashion customers ------- a secure online shopping experience.",
      "options": { "A": "are guaranteed", "B": "to guarantee", "C": "guaranteeing", "D": "having guaranteed" },
      "answer": "A",
      "explanation": "Thể bị động hiện tại đơn 'are guaranteed' (được đảm bảo).",
      "tag": "Grammar"
    },
    {
      "q_id": 121,
      "question_text": "Using last year’s record profits, Mr. Shakar was able to invest ------- a new grocery delivery service.",
      "options": { "A": "about", "B": "near", "C": "in", "D": "of" },
      "answer": "C",
      "explanation": "Cấu trúc 'invest in something' (đầu tư vào cái gì).",
      "tag": "Grammar"
    },
    {
      "q_id": 122,
      "question_text": "Central Oregon Power must renew the ------- at least 30 days before the current one expires.",
      "options": { "A": "contractor", "B": "contract", "C": "contracting", "D": "contracted" },
      "answer": "B",
      "explanation": "Cần một danh từ 'contract' (hợp đồng) làm tân ngữ cho động từ 'renew'.",
      "tag": "Grammar"
    },
    {
      "q_id": 123,
      "question_text": "Please park on the west side... ------- parking spaces closer to the entrance can be used by customers.",
      "options": { "A": "instead of", "B": "so that", "C": "resulting from", "D": "as if" },
      "answer": "B",
      "explanation": "Cụm liên từ 'so that' (để cho) chỉ mục đích của hành động đỗ xe ở phía tây.",
      "tag": "Grammar"
    },
    {
      "q_id": 124,
      "question_text": "The report was authored ------- by Chae-Won Sohn... and by Ray Hahn.",
      "options": { "A": "joint", "B": "joints", "C": "jointed", "D": "jointly" },
      "answer": "D",
      "explanation": "Trạng từ 'jointly' (cùng nhau/chung) bổ nghĩa cho hành động 'authored'.",
      "tag": "Grammar"
    },
    {
      "q_id": 125,
      "question_text": "The Teason Resort offers ------- activities for children and adults throughout the day.",
      "options": { "A": "capable", "B": "dense", "C": "absent", "D": "numerous" },
      "answer": "D",
      "explanation": "Tính từ 'numerous' (nhiều/đông đảo) bổ nghĩa cho danh từ 'activities'.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 126,
      "question_text": "Because the museum receives generous donations, it ------- raises the price of admission tickets.",
      "options": { "A": "nearly", "B": "likely", "C": "generally", "D": "rarely" },
      "answer": "D",
      "explanation": "Trạng từ 'rarely' (hiếm khi) phù hợp logic: vì có nhiều quyên góp nên hiếm khi tăng giá vé.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 127,
      "question_text": "Global Data LLC will promote Hae-In Ahn... ------- June 1.",
      "options": { "A": "effective", "B": "effecting", "C": "effected", "D": "effect" },
      "answer": "A",
      "explanation": "Tính từ 'effective' đi với một mốc thời gian mang nghĩa 'có hiệu lực từ'.",
      "tag": "Grammar"
    },
    {
      "q_id": 128,
      "question_text": "The upcoming focus group will be an online meeting during ------- each participant can join...",
      "options": { "A": "through", "B": "there", "C": "which", "D": "who" },
      "answer": "C",
      "explanation": "Đại từ quan hệ 'which' thay thế cho 'online meeting' đứng sau giới từ 'during'.",
      "tag": "Grammar"
    },
    {
      "q_id": 129,
      "question_text": "Patricia Park developed a proprietary ------- for Sprayeze, an all-organic cleaning compound.",
      "options": { "A": "menu", "B": "formula", "C": "article", "D": "decision" },
      "answer": "B",
      "explanation": "Danh từ 'formula' (công thức) phù hợp với việc chế tạo hợp chất tẩy rửa.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 130,
      "question_text": "Rayel Pharmaceutical provides a list of its ------- and their affiliations on its Web site.",
      "options": { "A": "research", "B": "researching", "C": "researched", "D": "researchers" },
      "answer": "D",
      "explanation": "Cần danh từ số nhiều chỉ người 'researchers' (các nhà nghiên cứu).",
      "tag": "Grammar"
    }
  ],
  "part_6": [
    {
      "group_id": "P6_G01",
      "passage": `To: mnandy@gmantcs.com\nFrom: jblaire@blaireaccounting.ca\nRe: AUTOMATIC REPLY\nDate: 9 January, 10:34 AM\nHello, and thank you for contacting Blaire Accounting. I will be out of the office until 31 January. I will respond to your message when I ------- (131). If you need ------- (132) assistance, please contact Susan Lewis, my administrative assistant... You can ------- (133) call her directly at 416-555-0193. ------- (134).`,
      "questions": [
        {
          "q_id": 131,
          "options": { "A": "recover", "B": "return", "C": "begin", "D": "finish" },
          "answer": "B",
          "explanation": "Động từ 'return' (quay trở lại) phù hợp với ngữ cảnh đang vắng mặt.",
          "tag": "Vocabulary"
        },
        {
          "q_id": 132,
          "options": { "A": "immediate", "B": "immediately", "C": "immediacy", "D": "immediacies" },
          "answer": "A",
          "explanation": "Tính từ 'immediate' (ngay lập tức) bổ nghĩa cho danh từ 'assistance'.",
          "tag": "Grammar"
        },
        {
          "q_id": 133,
          "options": { "A": "also", "B": "lightly", "C": "similarly", "D": "again" },
          "answer": "A",
          "explanation": "Trạng từ 'also' (cũng) bổ sung thêm một cách thức liên lạc khác.",
          "tag": "Vocabulary"
        },
        {
          "q_id": 134,
          "options": { "D": "Ms. Lewis is in the office on weekdays from 9 A.M. to 5 P.M.", "...": "..." },
          "answer": "D",
          "explanation": "Câu này cung cấp thông tin giờ làm việc của người được giới thiệu ở trên.",
          "tag": "Sentence Insertion"
        }
      ]
    },
    {
      "group_id": "P6_G02",
      "passage": `Attention customers of Metro Coffee:\nWe are excited to announce that we ------- (135) a second Metro Coffee store! As you know, we recently expanded our offerings... As a result, our ------- (136) has increased significantly. To keep up with demand, we decided that a second store was necessary. ------- (137). Our new space is substantially ------- (138) but offers the same wide selection of items.`,
      "questions": [
        {
          "q_id": 135,
          "options": { "A": "will open", "B": "can open", "C": "are opening", "D": "have opened" },
          "answer": "D",
          "explanation": "Thì hiện tại hoàn thành 'have opened' báo cáo một sự việc vừa mới hoàn thành.",
          "tag": "Grammar"
        },
        {
          "q_id": 136,
          "options": { "A": "debt", "B": "payroll", "C": "business", "D": "investment" },
          "answer": "C",
          "explanation": "Danh từ 'business' (việc kinh doanh) tăng lên do mở rộng sản phẩm.",
          "tag": "Vocabulary"
        },
        {
          "q_id": 137,
          "options": { "D": "It is located two miles away in the historic district.", "...": "..." },
          "answer": "D",
          "explanation": "Câu này bổ sung vị trí của cửa hàng thứ hai vừa được nhắc đến.",
          "tag": "Sentence Insertion"
        },
        {
          "q_id": 138,
          "options": { "A": "large", "B": "larger", "C": "largely", "D": "largest" },
          "answer": "B",
          "explanation": "Cấu trúc so sánh hơn 'larger' để đối chiếu không gian mới với không gian cũ.",
          "tag": "Grammar"
        }
      ]
    },
    {
      "group_id": "P6_G03",
      "passage": `The Ferrese Hotel will be hosting the Global Shipping Partners Conference next week... ------- (139), management expects to see many more customers... ------- (140). I will be hiring temporary staff to ensure that ------- (141) can meet những yêu cầu tăng cao này. Please take the time to help them learn our ------- (142) khi họ ở đây.`,
      "questions": [
        {
          "q_id": 139,
          "options": { "A": "If not", "B": "After all", "C": "Therefore", "D": "In the meantime" },
          "answer": "C",
          "explanation": "Trạng từ liên kết 'Therefore' (Do đó) chỉ kết quả của việc tổ chức hội nghị.",
          "tag": "Grammar"
        },
        {
          "q_id": 140,
          "options": { "D": "The business center will also be busier than usual.", "...": "..." },
          "answer": "D",
          "explanation": "Bổ sung thêm một bộ phận khác cũng sẽ bận rộn do hội nghị.",
          "tag": "Sentence Insertion"
        },
        {
          "q_id": 141,
          "options": { "A": "it", "B": "we", "C": "both", "D": "something" },
          "answer": "B",
          "explanation": "Đại từ 'we' (chúng ta) làm chủ ngữ, bao gồm cả nhân viên hiện tại và nhân viên tạm thời.",
          "tag": "Grammar"
        },
        {
          "q_id": 142,
          "options": { "A": "lines", "B": "steps", "C": "names", "D": "routines" },
          "answer": "D",
          "explanation": "Danh từ 'routines' (các công việc thường nhật/quy trình) phù hợp để hướng dẫn nhân viên mới.",
          "tag": "Vocabulary"
        }
      ]
    },
    {
      "group_id": "P6_G04",
      "passage": `Zura Technology Solutions (ZTS) announced today that it has completed the ------- (143) of an office building... The building... will serve as ZTS’s ------- (144) base of operations... ------- (145). CEO Gloria Rubirosa cho biết... we ------- (146) to work hard to meet the needs of each and every one of our customers.`,
      "questions": [
        {
          "q_id": 143,
          "options": { "A": "construction", "B": "cleaning", "C": "inspection", "D": "purchase" },
          "answer": "D",
          "explanation": "Danh từ 'purchase' (việc mua lại) phù hợp với việc hoàn thành giao dịch tòa nhà.",
          "tag": "Vocabulary"
        },
        {
          "q_id": 144,
          "options": { "A": "voluntary", "B": "primary", "C": "short-term", "D": "occasional" },
          "answer": "B",
          "explanation": "Tính từ 'primary' (chính) mô tả trụ sở hoạt động chính của công ty.",
          "tag": "Vocabulary"
        },
        {
          "q_id": 145,
          "options": { "A": "ZTS’s leadership team sees the move as strategic.", "...": "..." },
          "answer": "A",
          "explanation": "Câu này nhận định về ý nghĩa của việc di chuyển trụ sở công ty.",
          "tag": "Sentence Insertion"
        },
        {
          "q_id": 146,
          "options": { "A": "continued", "B": "continuing", "C": "would have continued", "D": "will continue" },
          "answer": "D",
          "explanation": "Thì tương lai đơn 'will continue' thể hiện cam kết trong tương lai.",
          "tag": "Grammar"
        }
      ]
    }
  ],
      part_7: []
    }
  },
  {
    metadata: { year: 2024, test_no: 9, series: "ETS TOEIC 2024" },
    content: {
  "part_5": [
    {
      "q_id": 101,
      "question_text": "Mr. Liu is known for negotiating employee disputes -------.",
      "options": {
        "A": "calm",
        "B": "calmly",
        "C": "calmest",
        "D": "calmness"
      },
      "answer": "B",
      "explanation": "Cần một trạng từ (calmly) để bổ nghĩa cho động từ 'negotiating' (đàm phán một cách bình tĩnh).",
      "tag": "Grammar"
    },
    {
      "q_id": 102,
      "question_text": "The city is accepting proposals for the redesign of Oshida Public Park ------- January 25.",
      "options": {
        "A": "when",
        "B": "until",
        "C": "a few",
        "D": "whether"
      },
      "answer": "B",
      "explanation": "Giới từ 'until' chỉ thời hạn kết thúc của hành động (nhận đề xuất cho đến ngày 25 tháng 1).",
      "tag": "Vocabulary"
    },
    {
      "q_id": 103,
      "question_text": "Sales ------- maintain client files and provide logistical support.",
      "options": {
        "A": "assists",
        "B": "assisted",
        "C": "assisting",
        "D": "assistants"
      },
      "answer": "D",
      "explanation": "Câu cần một danh từ làm chủ ngữ số nhiều (vì động từ 'maintain' ở dạng nguyên mẫu). 'Sales assistants' nghĩa là các trợ lý bán hàng.",
      "tag": "Grammar"
    },
    {
      "q_id": 104,
      "question_text": "Tonight at Harbor Falls Library, writer Delroy Greene will be ------- stories from his childhood in Jamaica.",
      "options": {
        "A": "dividing",
        "B": "sharing",
        "C": "using",
        "D": "awarding"
      },
      "answer": "B",
      "explanation": "Dựa vào nghĩa của câu, nhà văn sẽ 'chia sẻ' (sharing) những câu chuyện về thời thơ ấu.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 105,
      "question_text": "Mr. Kam has invited all staff members to attend ------- retirement party.",
      "options": {
        "A": "he",
        "B": "his",
        "C": "him",
        "D": "himself"
      },
      "answer": "B",
      "explanation": "Cần tính từ sở hữu 'his' đứng trước cụm danh từ 'retirement party'.",
      "tag": "Grammar"
    },
    {
      "q_id": 106,
      "question_text": "Stanley Point Theater in downtown Detroit will produce four plays and three ------- next season.",
      "options": {
        "A": "actors",
        "B": "audiences",
        "C": "tickets",
        "D": "musicals"
      },
      "answer": "D",
      "explanation": "Danh từ 'musicals' phù hợp về mặt ngữ nghĩa khi đi cùng với 'plays'.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 107,
      "question_text": "There is enough money ------- in the budget to cover travel expenses.",
      "options": {
        "A": "remains",
        "B": "remainder",
        "C": "remained",
        "D": "remaining"
      },
      "answer": "D",
      "explanation": "Dùng phân từ 'remaining' như một tính từ bổ nghĩa cho danh từ 'money'.",
      "tag": "Grammar"
    },
    {
      "q_id": 108,
      "question_text": "Romm Industries staff trained nine new associates who were hired ------- the same day.",
      "options": {
        "A": "as",
        "B": "into",
        "C": "on",
        "D": "once"
      },
      "answer": "C",
      "explanation": "Giới từ 'on' dùng trước cụm chỉ ngày (on the same day).",
      "tag": "Grammar"
    },
    {
      "q_id": 109,
      "question_text": "Taylor Kanagawa wrote several books on effective team management ------- his 40-year career at Sapp Publishers Ltd.",
      "options": {
        "A": "between",
        "B": "while",
        "C": "beside",
        "D": "during"
      },
      "answer": "D",
      "explanation": "Giới từ 'during' đi với khoảng thời gian.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 110,
      "question_text": "The community clinic project is designed to improve health ------- in isolated areas.",
      "options": {
        "A": "outcomes",
        "B": "reasons",
        "C": "corrections",
        "D": "grades"
      },
      "answer": "A",
      "explanation": "'Health outcomes' = kết quả sức khỏe.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 111,
      "question_text": "Jingshen Airlines announced that it will be hiring 200 ------- employees next year.",
      "options": {
        "A": "add",
        "B": "adding",
        "C": "additional",
        "D": "additionally"
      },
      "answer": "C",
      "explanation": "Cần tính từ 'additional' bổ nghĩa cho 'employees'.",
      "tag": "Grammar"
    },
    {
      "q_id": 112,
      "question_text": "The customer was impressed by how ------- Mr. Schmid operated the complicated machinery.",
      "options": {
        "A": "skillfully",
        "B": "primarily",
        "C": "obviously",
        "D": "richly"
      },
      "answer": "A",
      "explanation": "Trạng từ 'skillfully' bổ nghĩa cho động từ 'operated'.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 113,
      "question_text": "Staff are invited to participate in a ------- of social events during the first week of May.",
      "options": {
        "A": "series",
        "B": "status",
        "C": "theory",
        "D": "guest"
      },
      "answer": "A",
      "explanation": "'A series of' = một chuỗi.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 114,
      "question_text": "The contract states that Solcus Corporation will be ------- for any costs resulting from work delays.",
      "options": {
        "A": "accountable",
        "B": "manageable",
        "C": "knowledgeable",
        "D": "flexible"
      },
      "answer": "A",
      "explanation": "'Accountable' = chịu trách nhiệm.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 115,
      "question_text": "Author Minh Phan’s latest novel was ------- influenced by Vietnamese folk stories.",
      "options": {
        "A": "heavy",
        "B": "heavily",
        "C": "highest",
        "D": "heavier"
      },
      "answer": "B",
      "explanation": "Trạng từ 'heavily' bổ nghĩa cho 'influenced'.",
      "tag": "Grammar"
    },
    {
      "q_id": 116,
      "question_text": "Tourists are expected to flock to the Sorachi Discovery Museum when it opens ------- in Mikasa, Hokkaido.",
      "options": {
        "A": "soon",
        "B": "as",
        "C": "almost",
        "D": "initial"
      },
      "answer": "A",
      "explanation": "'Soon' chỉ thời gian tương lai gần.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 117,
      "question_text": "The factory floor is divided into four ------- sections: one for each stage of product assembly.",
      "options": {
        "A": "previous",
        "B": "eligible",
        "C": "distinct",
        "D": "installed"
      },
      "answer": "C",
      "explanation": "'Distinct' = riêng biệt.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 118,
      "question_text": "Handouts for the afternoon seminar must be prepared ------- the lunch break.",
      "options": {
        "A": "down",
        "B": "beside",
        "C": "before",
        "D": "off"
      },
      "answer": "C",
      "explanation": "'Before' chỉ thời điểm.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 119,
      "question_text": "Chat Mobile will determine, based on end-of-the-year sales numbers, ------- the company will open any additional stores.",
      "options": {
        "A": "whether",
        "B": "who",
        "C": "since",
        "D": "that"
      },
      "answer": "A",
      "explanation": "'Determine whether' = quyết định xem có hay không.",
      "tag": "Grammar"
    },
    {
      "q_id": 120,
      "question_text": "The red line will ------- only express stops from Finn Street to Boone Street on weekends.",
      "options": {
        "A": "made",
        "B": "makes",
        "C": "make",
        "D": "making"
      },
      "answer": "C",
      "explanation": "Sau 'will' dùng động từ nguyên mẫu.",
      "tag": "Grammar"
    },
    {
      "q_id": 121,
      "question_text": "The company’s latest video game, Hunting for Treasure, has been praised ------- by reviewers.",
      "options": {
        "A": "enthusiastically",
        "B": "enthusiastic",
        "C": "enthusiasm",
        "D": "enthusiast"
      },
      "answer": "A",
      "explanation": "Trạng từ bổ nghĩa cho 'praised'.",
      "tag": "Grammar"
    },
    {
      "q_id": 122,
      "question_text": "During the off-season, the Great Mountain Amusement Park operates on ------- hours.",
      "options": {
        "A": "reduced",
        "B": "employed",
        "C": "slow",
        "D": "busy"
      },
      "answer": "A",
      "explanation": "'Reduced hours' = giờ hoạt động rút ngắn.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 123,
      "question_text": "The construction project will ------- 30 residential units and 10 commercial spaces.",
      "options": {
        "A": "overall",
        "B": "first",
        "C": "about",
        "D": "include"
      },
      "answer": "D",
      "explanation": "'Include' = bao gồm.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 124,
      "question_text": "Ms. Pham’s employment contract cannot be finalized ------- her starting salary is still being negotiated.",
      "options": {
        "A": "once",
        "B": "because",
        "C": "after",
        "D": "until"
      },
      "answer": "B",
      "explanation": "'Because' chỉ nguyên nhân.",
      "tag": "Grammar"
    },
    {
      "q_id": 125,
      "question_text": "Office supplies are available in our resources cabinet for ------- who needs them.",
      "options": {
        "A": "anyone",
        "B": "whichever",
        "C": "such",
        "D": "more"
      },
      "answer": "A",
      "explanation": "'Anyone' = bất kỳ ai.",
      "tag": "Grammar"
    },
    {
      "q_id": 126,
      "question_text": "Through its network of local agents, new housing start-up Philocenia intends to ------- the rental sector.",
      "options": {
        "A": "exercise",
        "B": "indicate",
        "C": "participate",
        "D": "revolutionize"
      },
      "answer": "D",
      "explanation": "'Revolutionize' = cách mạng hóa.",
      "tag": "Vocabulary"
    },
    {
      "q_id": 127,
      "question_text": "Rapid Books has the payroll solutions every company needs, allowing users ------- invoices in three easy steps.",
      "options": {
        "A": "sent",
        "B": "have sent",
        "C": "sending",
        "D": "to send"
      },
      "answer": "D",
      "explanation": "'Allow someone to do something'.",
      "tag": "Grammar"
    },
    {
      "q_id": 128,
      "question_text": "Epky Electronics will open eight additional retail stores ------- the next two years.",
      "options": {
        "A": "above",
        "B": "behind",
        "C": "about",
        "D": "within"
      },
      "answer": "D",
      "explanation": "'Within' + khoảng thời gian.",
      "tag": "Grammar"
    },
    {
      "q_id": 129,
      "question_text": "The three-day workshop focuses on the public speaking ------- that are central to delivering memorable presentations.",
      "options": {
        "A": "strategies",
        "B": "strategized",
        "C": "strategically",
        "D": "strategic"
      },
      "answer": "A",
      "explanation": "Danh từ số nhiều làm chủ ngữ.",
      "tag": "Grammar"
    },
    {
      "q_id": 130,
      "question_text": "Critics agree that the movie An Unusual Introduction ------- combines computer-generated images and live action.",
      "options": {
        "A": "seamlessly",
        "B": "collectively",
        "C": "factually",
        "D": "distantly"
      },
      "answer": "A",
      "explanation": "'Seamlessly' = liền mạch.",
      "tag": "Vocabulary"
    }
  ]

,
      "part_6": [
    {
      "group_id": "P6_G01",
      "passage": `Sky Air First Pass
Thank you for flying Sky Air First with ------- (131). We hope you enjoy your flight.
You can take advantage of our best prices on future flights ------- (132) purchasing a Sky Air First Pass. For a ------- (133) annual fee, you will get special discounts, seat upgrades, and the use of our exclusive travelers’ lounge. ------- (134). Ask your flight attendant for more information and an application.`,
      "questions": [
        {
          "q_id": 131,
          "options": { "A": "them", "B": "theirs", "C": "us", "D": "ours" },
          "answer": "C",
          "explanation": "Dùng đại từ tân ngữ 'us' để chỉ hãng hàng không đang gửi thông điệp đến khách hàng.",
          "tag": "Grammar"
        },
        {
          "q_id": 132,
          "options": { "A": "at", "B": "on", "C": "by", "D": "to" },
          "answer": "C",
          "explanation": "Giới từ 'by' cộng với danh động từ (by purchasing) chỉ phương thức thực hiện hành động.",
          "tag": "Grammar"
        },
        {
          "q_id": 133,
          "options": { "A": "lowers", "B": "low", "C": "lowly", "D": "lowest" },
          "answer": "B",
          "explanation": "Cần tính từ 'low' (thấp) để bổ nghĩa cho danh từ 'annual fee'.",
          "tag": "Grammar"
        },
        {
          "q_id": 134,
          "options": {
            "A": "We hope you will fly Sky Air First again.",
            "B": "You will also get priority boarding.",
            "C": "Please find your seat immediately.",
            "D": "The flight delay will be minimal."
          },
          "answer": "B",
          "explanation": "Câu này bổ sung thêm quyền lợi khi mua thẻ thành viên (ưu tiên lên máy bay).",
          "tag": "Sentence Insertion"
        }
      ]
    },

    {
      "group_id": "P6_G02",
      "passage": `CJOK Radio Show Welcomes New Staff
QUEENSVILLE (7 July)—Local radio station CJOK announced Katherine Dees as the new producer of the popular show Out and About in Queensville. Ms. Dees is giờ đang ------- (135) for coordinating guests for the show, and managing media relations.
------- (136), the station hired sound editor Virginia Thacker and production assistant Reggie Dietrich to support Ms. Dees in her new role. ------- (137).
Out and About in Queensville, which has been airing for 30 years, is performed live weekly from September to May in the Orpheum Theater in downtown Queensville. The show ------- (138) musical guests, writers, and storytellers for an hour of weekly programming.`,
      "questions": [
        {
          "q_id": 135,
          "options": { "A": "responsive", "B": "responsibly", "C": "responding", "D": "responsible" },
          "answer": "D",
          "explanation": "Cấu trúc 'be responsible for' (chịu trách nhiệm cho cái gì).",
          "tag": "Grammar"
        },
        {
          "q_id": 136,
          "options": { "A": "Even so", "B": "In fact", "C": "For example", "D": "In addition" },
          "answer": "D",
          "explanation": "'In addition' (Thêm vào đó) dùng để giới thiệu thêm các nhân sự mới được thuê.",
          "tag": "Grammar"
        },
        {
          "q_id": 137,
          "options": {
            "A": "CJOK was founded 60 years ago.",
            "B": "These recent hires follow the retirement of producer Ed Evans.",
            "C": "Ms. Dees was born and raised in Cedarburg.",
            "D": "CJOK has more than one popular show in its lineup."
          },
          "answer": "B",
          "explanation": "Giải thích lý do tại sao đài phát thanh vừa mới thuê thêm một loạt nhân viên mới.",
          "tag": "Sentence Insertion"
        },
        {
          "q_id": 138,
          "options": { "A": "gives", "B": "marks", "C": "features", "D": "holds" },
          "answer": "C",
          "explanation": "Động từ 'feature' (có sự tham gia của/bao gồm) dùng cho các chương trình giới thiệu nghệ sĩ.",
          "tag": "Vocabulary"
        }
      ]
    },

    {
      "group_id": "P6_G03",
      "passage": `E-mail – Northwest Bags
To: Sandra Barga sbarga97@hjmail.ca
From: Artie Romanche service@northwestbags.ca
Date: 12 July
Subject: Order number 71280
Dear Ms. Barga,
We received your recent order asking for your name to be stitched on a Klamath Kool handbag.
We are, ------- (139), eager to complete your order. Unfortunately, our seamstress who fulfills personalisation requirements will be on leave for the next three days. We wanted to let you know that her ------- (140) sẽ gây ra sự chậm trễ trong việc vận chuyển túi của bạn.
------- (141) cho sự chờ đợi, chúng tôi muốn đề nghị giảm giá 10% cho đơn hàng hiện tại của bạn. Hoặc, nếu bạn thích, bạn có thể chọn cá nhân hóa miễn phí cho đơn hàng tiếp theo. ------- (142). Tại Northwest Bags, chúng tôi phấn đấu vì sự hài lòng 100% của khách hàng!`,
      "questions": [
        {
          "q_id": 139,
          "options": { "A": "still", "B": "besides", "C": "of course", "D": "nevertheless" },
          "answer": "C",
          "explanation": "'Of course' (dĩ nhiên/tất nhiên) nhấn mạnh mong muốn hoàn tất đơn hàng của cửa hàng.",
          "tag": "Vocabulary"
        },
        {
          "q_id": 140,
          "options": { "A": "absence", "B": "arrival", "C": "request", "D": "investigation" },
          "answer": "A",
          "explanation": "Danh từ 'absence' (sự vắng mặt) dùng vì thợ may đang trong kỳ nghỉ (on leave).",
          "tag": "Vocabulary"
        },
        {
          "q_id": 141,
          "options": { "A": "Compensated", "B": "To compensate", "C": "For compensating", "D": "It is compensation" },
          "answer": "B",
          "explanation": "Dùng 'To-V' (Để bồi thường/Để bù đắp) để chỉ mục đích ở đầu câu.",
          "tag": "Grammar"
        },
        {
          "q_id": 142,
          "options": {
            "A": "The choice is yours.",
            "B": "We appreciate your review.",
            "C": "The bag will look great with your initials on it.",
            "D": "We are the only local retailer offering custom services."
          },
          "answer": "A",
          "explanation": "Kết luận sau khi đưa ra hai phương án đền bù cho khách hàng.",
          "tag": "Sentence Insertion"
        }
      ]
    },

    {
      "group_id": "P6_G04",
      "passage": `Sehelec Announces Wind-Solar Hybrid Project
MUMBAI (15 March)—Sehelec Ltd. announced it will begin construction on a 500-megawatt wind-solar hybrid power ------- (143) outside of Bangalore, India. ------- (144). Sehelec expects to begin operations within 24 months, and it will sell the power to Indian energy giant Novaseon Industries.
“Our contract with Novaseon to provide ------- (145) power moves us closer to our long-term corporate goal,” said Sumit Varma, CEO of Sehelec. “Our objective is to achieve a capacity of 20 gigawatts within five years... Và điều đó, đến lượt nó, sẽ giúp đất nước ------- (146) mục tiêu giảm lượng carbon của mình.”`,
      "questions": [
        {
          "q_id": 143,
          "options": { "A": "plant", "B": "planter", "C": "planting", "D": "planted" },
          "answer": "A",
          "explanation": "'Power plant' là cụm danh từ cố định chỉ nhà máy điện.",
          "tag": "Vocabulary"
        },
        {
          "q_id": 144,
          "options": {
            "A": "Windy conditions can cause damage to tall buildings.",
            "B": "The facility will consist of a mix of solar panels and wind turbines.",
            "C": "Electric vehicles have fewer emissions than other vehicles have.",
            "D": "The pace of upgrades to India’s power grid slowed slightly this year."
          },
          "answer": "B",
          "explanation": "Câu này mô tả chi tiết về cấu tạo của dự án năng lượng kết hợp (hybrid) đã nhắc đến ở trên.",
          "tag": "Sentence Insertion"
        },
        {
          "q_id": 145,
          "options": { "A": "renew", "B": "renewers", "C": "renewable", "D": "to renew" },
          "answer": "C",
          "explanation": "Cần tính từ 'renewable' (có thể tái tạo) để bổ nghĩa cho danh từ 'power'.",
          "tag": "Grammar"
        },
        {
          "q_id": 146,
          "options": { "A": "understand", "B": "explain", "C": "block", "D": "reach" },
          "answer": "D",
          "explanation": "Động từ 'reach' (đạt được) đi với danh từ 'target' (mục tiêu).",
          "tag": "Vocabulary"
        }
      ]
    }
  ],
      part_7: []
    }
  },
  {
    metadata: { year: 2024, test_no: 10, series: "ETS TOEIC 2024" },
    content: {
      part_5: [ { "q_id": 101, "question_text": "According to the department head, ------- are ready to begin work on the Arborney Bridge project.", "options": { "A": "us", "B": "we", "C": "our", "D": "ours" }, "answer": "B", "explanation": "Vị trí này cần một đại từ nhân xưng đóng vai trò chủ ngữ đứng trước động từ 'are'. 'We' là đại từ chủ ngữ phù hợp nhất.", "tag": "Grammar" }, { "q_id": 102, "question_text": "The policy prohibiting visitor access to the laboratory must be ------- followed.", "options": { "A": "strictly", "B": "bitterly", "C": "sizably", "D": "colorfully" }, "answer": "A", "explanation": "Trạng từ 'strictly' (một cách nghiêm ngặt) thường đi kèm với động từ 'followed' để tạo thành cụm 'strictly followed' (được tuân thủ nghiêm ngặt).", "tag": "Vocabulary" }, { "q_id": 103, "question_text": "Yoon-Hee Kim is the ------- graduate of Serrica University to lead a Fortune 500 company.", "options": { "A": "most", "B": "for", "C": "first", "D": "nearly" }, "answer": "C", "explanation": "Dùng số thứ tự 'first' (đầu tiên) để chỉ vị trí của Yoon-Hee Kim trong danh sách những người tốt nghiệp tại trường này.", "tag": "Vocabulary" }, { "q_id": 104, "question_text": "Contact Frank Marilli in the IT department ------- you have any problems with the new database software.", "options": { "A": "and", "B": "then", "C": "but", "D": "if" }, "answer": "D", "explanation": "Liên từ 'if' (nếu) dùng để thiết lập một câu điều kiện: 'Hãy liên hệ... nếu bạn gặp bất kỳ vấn đề nào'.", "tag": "Grammar" }, { "q_id": 105, "question_text": "A ------- efficiency expert will be visiting our work site in early November.", "options": { "A": "led", "B": "leader", "C": "leading", "D": "leads" }, "answer": "C", "explanation": "Cần một tính từ để bổ nghĩa cho danh từ 'expert'. 'Leading' đóng vai trò tính từ có nghĩa là 'hàng đầu' hoặc 'chủ chốt'.", "tag": "Grammar" }, { "q_id": 106, "question_text": "At Gallant’s Pet Store, customer ------- are accepted between 9:00 A.M. and 6:00 P.M.", "options": { "A": "behaviors", "B": "relations", "C": "orders", "D": "types" }, "answer": "C", "explanation": "Trong ngữ cảnh một cửa hàng thú cưng, 'customer orders' (đơn đặt hàng của khách) là danh từ phù hợp nhất về nghĩa.", "tag": "Vocabulary" }, { "q_id": 107, "question_text": "The management at Carette Industries ------- values the work of the research team.", "options": { "A": "high", "B": "highly", "C": "highest", "D": "higher" }, "answer": "B", "explanation": "Trạng từ 'highly' (rất nhiều/đánh giá cao) bổ nghĩa cho động từ 'values'. Cụm 'highly value' có nghĩa là đánh giá rất cao.", "tag": "Grammar" }, { "q_id": 108, "question_text": "Pentrexa Pharmacy is able to ------- most prescriptions within one business day.", "options": { "A": "care", "B": "earn", "C": "fill", "D": "lift" }, "answer": "C", "explanation": "Động từ 'fill' trong ngành dược có nghĩa là chuẩn bị thuốc theo đơn (fill a prescription).", "tag": "Vocabulary" }, { "q_id": 109, "question_text": "The ------- of a parking structure for Huron General Hospital will begin on June 1.", "options": { "A": "construct", "B": "constructed", "C": "construction", "D": "constructs" }, "answer": "C", "explanation": "Sau mạo từ 'The' và trước giới từ 'of' cần một danh từ. 'Construction' (việc xây dựng) là danh từ phù hợp.", "tag": "Grammar" }, { "q_id": 110, "question_text": "Some of the flower beds surrounding Dale Valley Lodge had to be replanted ------- the recent rainstorm.", "options": { "A": "after", "B": "among", "C": "opposite", "D": "beside" }, "answer": "A", "explanation": "Dùng giới từ 'after' (sau khi) để chỉ mốc thời gian: những bồn hoa phải được trồng lại sau trận bão.", "tag": "Vocabulary" }, { "q_id": 111, "question_text": "Several water stations ------- along the route of next week’s marathon.", "options": { "A": "being installed", "B": "will be installed", "C": "to install", "D": "installed" }, "answer": "B", "explanation": "Câu nói về sự kiện diễn ra vào tuần tới (next week), nên cần dùng thì tương lai đơn dạng bị động 'will be installed' (sẽ được lắp đặt).", "tag": "Grammar" }, { "q_id": 112, "question_text": "The Crown Lagoon Hotel has 150 rooms, each with a ------- view of the city.", "options": { "A": "valid", "B": "recent", "C": "modern", "D": "scenic" }, "answer": "D", "explanation": "Tính từ 'scenic' (đẹp, thuộc về phong cảnh) thường đi với 'view' để mô tả tầm nhìn đẹp.", "tag": "Vocabulary" }, { "q_id": 113, "question_text": "Overall, charitable donations rose last year, ------- specific dollar amounts are not yet available.", "options": { "A": "although", "B": "neither", "C": "whenever", "D": "so" }, "answer": "A", "explanation": "Dùng liên từ 'although' (mặc dù) để nối hai vế tương phản: quyên góp tăng nhưng con số cụ thể vẫn chưa có.", "tag": "Grammar" }, { "q_id": 114, "question_text": "We strongly advise you to back up the data stored on your electronic device ------- turning it in for repairs.", "options": { "A": "once", "B": "both", "C": "then", "D": "before" }, "answer": "D", "explanation": "Giới từ 'before' chỉ trình tự: phải sao lưu dữ liệu 'trước khi' mang đi sửa chữa.", "tag": "Grammar" }, { "q_id": 115, "question_text": "Because Ms. Garcia enjoys creating charts and graphs, her supervisor ------- asks her to make materials for presentations.", "options": { "A": "frequent", "B": "frequents", "C": "frequenting", "D": "frequently" }, "answer": "D", "explanation": "Cần một trạng từ (frequently - một cách thường xuyên) để bổ nghĩa cho động từ 'asks'.", "tag": "Grammar" }, { "q_id": 116, "question_text": "Manufacturers of high-end products are dealing with excess ------- because consumers are buying fewer luxury items.", "options": { "A": "confidence", "B": "inventory", "C": "capacity", "D": "energy" }, "answer": "B", "explanation": "Khi sức mua giảm, các nhà sản xuất thường phải đối mặt với 'excess inventory' (hàng tồn kho dư thừa).", "tag": "Vocabulary" }, { "q_id": 117, "question_text": "The Hayle Group, ------- consists of business consultants and lawyers, advocates for tax policy reforms.", "options": { "A": "themselves", "B": "someone", "C": "whoever", "D": "which" }, "answer": "D", "explanation": "Đại từ quan hệ 'which' được dùng để bổ nghĩa cho danh từ chỉ vật/nhóm người 'The Hayle Group' trong mệnh đề quan hệ không xác định.", "tag": "Grammar" }, { "q_id": 118, "question_text": "Daishi Asayama is one of three applicants being ------- to oversee the Kingston franchises.", "options": { "A": "decided", "B": "corrected", "C": "considered", "D": "practiced" }, "answer": "C", "explanation": "Cụm 'being considered' (đang được xem xét/cân nhắc) cho một vị trí công việc.", "tag": "Vocabulary" }, { "q_id": 119, "question_text": "The reviewer of Ms. Chen’s book noted that her research was -------.", "options": { "A": "impressed", "B": "impressive", "C": "impress", "D": "impression" }, "answer": "B", "explanation": "Sau động từ to-be 'was' cần một tính từ để mô tả đặc điểm của 'research'. 'Impressive' (đầy ấn tượng) là tính từ phù hợp.", "tag": "Grammar" }, { "q_id": 120, "question_text": "Mr. Pereira has worked in our legal department ------- his transfer to the Atlanta office ten years ago.", "options": { "A": "since", "B": "between", "C": "without", "D": "like" }, "answer": "A", "explanation": "Giới từ 'since' dùng để chỉ một mốc thời gian trong quá khứ khi hành động bắt đầu và kéo dài đến hiện tại.", "tag": "Grammar" }, { "q_id": 121, "question_text": "Pennypack Markets soon plans to break ground on its largest ------- center in the area.", "options": { "A": "distributive", "B": "distribute", "C": "distributable", "D": "distribution" }, "answer": "D", "explanation": "Cụm danh từ 'distribution center' (trung tâm phân phối) là một thuật ngữ phổ biến trong kinh doanh vận tải.", "tag": "Grammar" }, { "q_id": 122, "question_text": "Ms. Miller ------- welcomed the speakers who will be leading the workshops.", "options": { "A": "accessibly", "B": "abundantly", "C": "briefly", "D": "momentarily" }, "answer": "C", "explanation": "Trạng từ 'briefly' (ngắn gọn/trong giây lát) mô tả cách thức đón tiếp: bà Miller đã chào mừng các diễn giả một cách ngắn gọn.", "tag": "Vocabulary" }, { "q_id": 123, "question_text": "Mr. Nayar ------- the need for enhanced safety protocols long before the government issued a report on the topic.", "options": { "A": "stresses", "B": "stressing", "C": "will stress", "D": "had stressed" }, "answer": "D", "explanation": "Hành động 'stresses' xảy ra trước một hành động quá khứ khác ('issued'), vì vậy cần dùng thì quá khứ hoàn thành 'had stressed'.", "tag": "Grammar" }, { "q_id": 124, "question_text": "Angelia Financial recently announced ------- changes to its benefits package that were greeted enthusiastically by its staff.", "options": { "A": "judgmental", "B": "substantial", "C": "magnetic", "D": "chaotic" }, "answer": "B", "explanation": "Tính từ 'substantial' (đáng kể/lớn) mô tả mức độ của những thay đổi trong gói phúc lợi.", "tag": "Vocabulary" }, { "q_id": 125, "question_text": "------- poems written by Mike Hanover are included in the new edition of Merwyn’s Anthology.", "options": { "A": "Whichever", "B": "Several", "C": "Something", "D": "None" }, "answer": "B", "explanation": "Lượng từ 'Several' (vài/một số) đứng trước danh từ số nhiều 'poems'.", "tag": "Grammar" }, { "q_id": 126, "question_text": "For a list of local farms that supply food to restaurants, please ------- to the Hueland Farm Association Web site.", "options": { "A": "elect", "B": "adapt", "C": "present", "D": "refer" }, "answer": "D", "explanation": "Cấu trúc 'refer to' (tham khảo/truy cập vào) được dùng khi chỉ dẫn người đọc tìm thêm thông tin.", "tag": "Vocabulary" }, { "q_id": 127, "question_text": "Samidu Communications is soliciting suggestions from its staff about ways of improving employee -------.", "options": { "A": "produced", "B": "productive", "C": "productivity", "D": "productively" }, "answer": "C", "explanation": "Sau tính từ 'employee' cần một danh từ để tạo thành danh từ ghép 'employee productivity' (năng suất nhân viên).", "tag": "Grammar" }, { "q_id": 128, "question_text": "Mr. Ben-Moshe always reserves the banquet room at Saitomi’s Kitchen ------- the sales team has a holiday event.", "options": { "A": "whenever", "B": "regarding", "C": "whether", "D": "besides" }, "answer": "A", "explanation": "Liên từ 'whenever' (bất cứ khi nào) dùng để chỉ sự việc xảy ra lặp đi lặp lại.", "tag": "Grammar" }, { "q_id": 129, "question_text": "Annika Dulin ------- the marketing department at Tollason Industries’ planning meeting tomorrow.", "options": { "A": "will represent", "B": "had represented", "C": "to represent", "D": "be representing" }, "answer": "A", "explanation": "Sự việc diễn ra vào 'tomorrow' (ngày mai), nên động từ chia ở thì tương lai đơn 'will represent'.", "tag": "Grammar" }, { "q_id": 130, "question_text": "Do not post any statements about the company on social media without prior -------.", "options": { "A": "authorization", "B": "supplement", "C": "consequence", "D": "responsibility" }, "answer": "A", "explanation": "Cụm từ 'without prior authorization' (không có sự cho phép trước) là một quy định công ty tiêu chuẩn.", "tag": "Vocabulary" } ],
      
  "part_6": [
    {
      "group_id": "P6_G01",
      "passage": `Kray Villa Museum To Celebrate Grand Opening
DEERFIELD (May 2)—The official opening of the Kray Villa Museum will take place on May 29 at 10 A.M. To mark the occasion, various festivities will be held throughout the day. ------- (131). Visit www.krayvillamuseum.org for details.
The museum is housed in the imposing structure ------- (132) was home to the once-influential Kray family beginning in the late 1800s. Having laid abandoned for the last 30 years, the property was purchased 2 years ago by the Deerfield Historical Society. Subsequently, the gardens were restored to appear as they did when the first generation of Krays moved into the villa. ------- (133), furnishings of the kind most likely used by the family are on display.
During the museum’s opening festivities, a live band ------- (134) music that was popular in the late nineteenth century.`,
      "questions": [
        {
          "q_id": 131,
          "options": {
            "A": "campaign",
            "B": "survey",
            "C": "programs",
            "D": "Admission is free, but a donation is suggested."
          },
          "answer": "D",
          "explanation": "Câu này cung cấp thông tin thực tế về việc vào cửa, phù hợp với một thông báo khai trương bảo tàng.",
          "tag": "Sentence Insertion"
        },
        {
          "q_id": 132,
          "options": {
            "A": "such",
            "B": "that",
            "C": "what",
            "D": "all"
          },
          "answer": "B",
          "explanation": "Đại từ quan hệ 'that' thay thế cho danh từ vật 'structure' làm chủ ngữ cho mệnh đề phụ.",
          "tag": "Grammar"
        },
        {
          "q_id": 133,
          "options": {
            "A": "Conversely",
            "B": "Additionally",
            "C": "In the meantime",
            "D": "To this end"
          },
          "answer": "B",
          "explanation": "Dùng 'Additionally' (Thêm vào đó) để bổ sung thêm thông tin về các đồ nội thất đang được trưng bày.",
          "tag": "Grammar"
        },
        {
          "q_id": 134,
          "options": {
            "A": "will perform",
            "B": "had to perform",
            "C": "was performing",
            "D": "could have performed"
          },
          "answer": "A",
          "explanation": "Báo cáo về sự kiện sắp xảy ra (vào ngày 29 tháng 5), dùng thì tương lai đơn.",
          "tag": "Grammar"
        }
      ]
    },

    {
      "group_id": "P6_G02",
      "passage": `Network Alert – Internal E-mail
To: All employees
From: Cecil Radu, Information Technology Manager
Date: April 8
Re: Network alert
We are experiencing some problems with our local network. Some of the affected services include the ------- (135) company Web site and the payroll database. We have also received information ------- (136) network data becoming corrupted and files not saving properly. Therefore, to ensure that you do not lose any work, please avoid using the network this morning while my team addresses những ------- (137) này. We anticipate that the systems will be fully functional by this afternoon. ------- (138).`,
      "questions": [
        {
          "q_id": 135,
          "options": {
            "A": "internalizing",
            "B": "internalize",
            "C": "internally",
            "D": "internal"
          },
          "answer": "D",
          "explanation": "Cần tính từ 'internal' (nội bộ) để bổ nghĩa cho 'company Web site'.",
          "tag": "Grammar"
        },
        {
          "q_id": 136,
          "options": {
            "A": "as",
            "B": "in",
            "C": "about",
            "D": "with"
          },
          "answer": "C",
          "explanation": "Giới từ 'about' đi sau 'information' để chỉ chủ đề của thông tin.",
          "tag": "Vocabulary"
        },
        {
          "q_id": 137,
          "options": {
            "A": "issues",
            "B": "clients",
            "C": "articles",
            "D": "proposals"
          },
          "answer": "A",
          "explanation": "Danh từ 'issues' (các vấn đề/trục trặc) dùng để chỉ các lỗi mạng vừa nêu ở trên.",
          "tag": "Vocabulary"
        },
        {
          "q_id": 138,
          "options": {
            "A": "server",
            "B": "corrupted",
            "C": "Thank you for your patience.",
            "D": "Contact IT"
          },
          "answer": "C",
          "explanation": "Một câu kết thúc thông báo phổ biến để cảm ơn sự hợp tác của nhân viên khi gặp sự cố kỹ thuật.",
          "tag": "Sentence Insertion"
        }
      ]
    },

    {
      "group_id": "P6_G03",
      "passage": `Notice – Takoradi Power & Gas (TP&G)
April 2
Dear TP&G Customer,
Takoradi Power & Gas (TP&G) is committed to providing every customer with dependable electricity service. To this end, we need to make some improvements to our ------- (139). A maintenance crew will be upgrading transformers in your neighbourhood on or about 22 April, beginning at 10 A.M. ------- (140), we will need to shut off the electricity to residences in your area from approximately 10 A.M. to 1 P.M. on that day. ------- (141). We hope that by ------- (142) this notice, any disruptions caused by the planned outage will be minimized.`,
      "questions": [
        {
          "q_id": 139,
          "options": {
            "A": "office",
            "B": "system",
            "C": "vehicles",
            "D": "records"
          },
          "answer": "B",
          "explanation": "Trong ngành điện lực, 'system' (hệ thống) là danh từ phù hợp nhất để chỉ cơ sở hạ tầng cần cải thiện.",
          "tag": "Vocabulary"
        },
        {
          "q_id": 140,
          "options": {
            "A": "If not",
            "B": "Nonetheless",
            "C": "Unfortunately",
            "D": "On the other hand"
          },
          "answer": "C",
          "explanation": "Dùng 'Unfortunately' (Thật không may) để thông báo một tin tức không mong muốn (việc cắt điện).",
          "tag": "Grammar"
        },
        {
          "q_id": 141,
          "options": {
            "A": "We apologize for the temporary inconvenience.",
            "B": "requests",
            "C": "companies",
            "D": "tips"
          },
          "answer": "A",
          "explanation": "Câu xin lỗi về sự bất tiện là câu chuyển tiếp lịch sự thường gặp trong các thông báo cắt điện.",
          "tag": "Sentence Insertion"
        },
        {
          "q_id": 142,
          "options": {
            "A": "sent",
            "B": "to send",
            "C": "will send",
            "D": "sending"
          },
          "answer": "D",
          "explanation": "Sau giới từ 'by' cần một danh động từ (V-ing). 'By sending' (Bằng cách gửi thông báo này).",
          "tag": "Grammar"
        }
      ]
    },

    {
      "group_id": "P6_G04",
      "passage": `E-mail – Patient Portal Invitation
To: hanna.kalita@netmail.co.uk
From: patientoutreach@ebmp.co.uk
Date: 12 June
Subject: Invitation to patient portal
Dear Ms. Kalita,
East Burberry Medical Practice has recently rolled out its patient portal, Burmed Connect. This service ------- (143) to help you manage your healthcare at your convenience. You are invited to create an account to access the portal. Once enrolled, you will be able to book appointments with our doctors as well as view your medical records and request prescriptions. ------- (144), you can use Burmed Connect to send messages to your doctor. Only you and your doctor will be able to see any messages exchanged giữa hai người. ------- (145).
To create an account, start by going to www.eastburberrymedicalpractice/patient-portal.co.uk. If you experience any difficulties with the ------- (146) process, please call 20 5550 0169.`,
      "questions": [
        {
          "q_id": 143,
          "options": {
            "A": "intended",
            "B": "will be",
            "C": "was",
            "D": "is intended"
          },
          "answer": "D",
          "explanation": "Dùng thì hiện tại đơn dạng bị động 'is intended' để chỉ mục đích sử dụng của một dịch vụ hiện đang hoạt động.",
          "tag": "Grammar"
        },
        {
          "q_id": 144,
          "options": {
            "A": "Furthermore",
            "B": "Instead",
            "C": "However",
            "D": "Otherwise"
          },
          "answer": "A",
          "explanation": "Dùng trạng từ 'Furthermore' (Hơn nữa) để bổ sung thêm một tính năng khác của cổng thông tin.",
          "tag": "Grammar"
        },
        {
          "q_id": 145,
          "options": {
            "A": "updated",
            "B": "app",
            "C": "Protecting your privacy is a responsibility we take seriously.",
            "D": "failed"
          },
          "answer": "C",
          "explanation": "Câu này cam kết bảo mật thông tin, bổ sung cho ý trước đó về việc chỉ bác sĩ và bệnh nhân mới thấy được tin nhắn.",
          "tag": "Sentence Insertion"
        },
        {
          "q_id": 146,
          "options": {
            "A": "selection",
            "B": "registration",
            "C": "invention",
            "D": "deletion"
          },
          "answer": "B",
          "explanation": "Vì đoạn văn đang hướng dẫn 'create an account' (tạo tài khoản), nên 'registration process' (quá trình đăng ký) là cụm từ chính xác.",
          "tag": "Vocabulary"
        }
      ]
    }
  ]
,

      part_7: []
    }
  },
  // 2023 Data
  {
    metadata: { year: 2023, test_no: 1, series: "ETS TOEIC 2023" },
    content: {
      part_5: generatePart5(101, 5),
      part_6: [],
      part_7: []
    }
  }
];