import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/blogs';

// Blog Schema
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title'],
      maxlength: [200, 'Title cannot be more than 200 characters'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
      maxlength: [5000, 'Description cannot be more than 5000 characters'],
      trim: true,
    },
    writtenBy: {
      type: String,
      required: [true, 'Please provide author name'],
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    published: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save middleware to generate slug
blogSchema.pre('save', function (next: any) {
  if (!this.slug) {
    this.slug = (this as any).title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }
  next();
});

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

const testBlogs = [
  {
    title: 'How Much Does a Boiler Service Cost in London in 2026?',
    description: `If you own a home or rental property in Greater London, keeping your boiler in good condition is essential. A boiler provides heating and hot water year-round, and neglecting regular servicing can lead to breakdowns, higher energy bills, reduced efficiency, and safety risks. This guide explains what a professional boiler service includes, hidden charges to watch out for, the best time to book, and why choosing a qualified Gas Safe engineer is crucial.

Boiler service costs in London vary based on boiler type, property location, system complexity, and engineer qualifications. While cost is important, homeowners should prioritize qualified, Gas Safe registered engineers. A professional service includes a thorough inspection of the heating appliance, checking for corrosion or leaks, testing gas pressure, examining ventilation and flue systems, inspecting safety devices, assessing burner performance, and cleaning key components. The engineer may also identify potential issues before they become expensive repairs.

When comparing quotes, understand what is included. Some companies advertise low rates but charge extra for essential checks. Hidden costs may include parking fees, congestion charges, out-of-hours callout fees, or additional inspections. The best time to schedule servicing is during spring or summer, avoiding autumn demand and ensuring your system is ready for winter. Regular maintenance improves efficiency, extends appliance lifespan, maintains warranties, and identifies safety concerns like carbon monoxide risks.

For landlords, annual servicing and gas safety inspections are particularly important for compliance. At London Climate Systems, our qualified engineers deliver detailed inspections and practical advice. Call London Climate Systems for pricing and to arrange your next boiler service.`,
    writtenBy: 'Masoud Moradi',
  },
  {
    title: '10 Signs Your Boiler Needs Repair Before It Breaks Down',
    description: `A boiler rarely stops working without warning. Heating systems often display clear signs of developing problems weeks or even months before a complete breakdown. Ignoring these warning signals can lead to expensive emergency repairs, higher energy bills, and a shortened lifespan for your heating system. This guide explains the 10 most common signs your boiler needs repair and when to contact a professional heating engineer in London.

1. **Strange Noises**: Banging, whistling, gurgling, or kettling noises may indicate limescale build-up, trapped air, pump problems, or faulty internal components.
2. **Loss of Heating or Hot Water**: Inconsistent heating or hot water supply may signal issues with the thermostat, diverter valve, pressure levels, or ignition system.
3. **Falling Boiler Pressure**: Regular drops below the recommended range may indicate a leak, faulty pressure relief valve, or issues with the expansion vessel.
4. **Slow Radiator Heating**: Cold spots, uneven heating, or slow warm-up times may indicate sludge build-up, trapped air, or circulation problems.
5. **Frequent Boiler Resets**: Regular shutdowns suggest underlying issues like ignition faults, pressure problems, or sensor failures.
6. **Leaks Around the Boiler**: Visible water may indicate leaks from seals, valves, pumps, or heat exchangers, requiring immediate attention.
7. **Rising Energy Bills**: Increased gas consumption may indicate reduced efficiency due to worn components or internal deposits.
8. **Pilot Light or Ignition Problems**: Repeated pilot light failures or unreliable ignition may indicate issues with gas supply, thermocouples, or ventilation.
9. **Unpleasant Smells**: Metallic, burning, or gas odours may indicate overheating, electrical faults, or combustion issues. If you suspect a gas leak, turn off the gas supply, ventilate the property, and contact a Gas Safe engineer immediately.
10. **Boiler Age Over 10 Years**: Older systems are more prone to faults, inefficiency, and component failures.

Early intervention helps minimise disruption and repair costs. Regular servicing is one of the most effective ways to prevent unexpected breakdowns. At London Climate Systems, our Gas Safe registered engineers provide fast diagnosis and practical solutions. Call London Climate Systems for pricing and to arrange an inspection.`,
    writtenBy: 'Masoud Moradi',
  },
  {
    title: 'Gas Safety Certificates in London: Everything Landlords Need to Know',
    description: `If you own a rental property in London, understanding your gas safety responsibilities is essential. Landlords have a legal duty to ensure gas appliances, pipework, flues, and related systems are maintained in a safe condition. One of the most important requirements is obtaining an annual Gas Safety Certificate (CP12). Failure to comply can result in significant fines, legal consequences, and risks to tenant safety. This guide explains everything landlords need to know about Gas Safety Certificates, including legal requirements, what a CP12 inspection involves, and how to remain compliant.

A Gas Safety Certificate is an official document issued by a Gas Safe registered engineer following an inspection. It confirms whether appliances are operating safely and identifies any defects or safety concerns. The certificate includes the property address, inspection date, details of each gas appliance checked, any defects identified, confirmation of safety checks, the engineer’s Gas Safe registration details, and recommendations for remedial work.

Gas appliances that are not properly maintained can pose serious risks, including gas leaks, fires, explosions, or carbon monoxide poisoning. Annual inspections help identify issues like damaged flues, poor combustion, inadequate ventilation, or gas leaks before they become dangerous. For landlords, compliance demonstrates professionalism and builds trust with tenants.

Under UK gas safety regulations, landlords must arrange annual inspections, ensure they are performed by a Gas Safe registered engineer, obtain a valid certificate, provide tenants with a copy, retain records, and repair identified faults promptly. Gas Safety Certificates are required for most residential rental properties, including houses, flats, HMOs, student accommodation, and shared housing.

A CP12 inspection includes checks on boilers, cookers, hobs, gas fires, pipework, flues, ventilation, and gas tightness. If safety issues are identified, the engineer will classify the problem and may disconnect unsafe appliances. Landlords are responsible for arranging repairs. Call London Climate Systems for pricing and to arrange your Gas Safety Certificate inspection.`,
    writtenBy: 'Masoud Moradi',
  },
  {
    title: 'New Boiler Installation in London: The Complete Homeowner\'s Guide for 2026',
    description: `A new boiler is a significant investment that can improve comfort, lower energy bills, and provide peace of mind for years. If your existing boiler is unreliable, inefficient, or nearing the end of its lifespan, choosing the right replacement is crucial. This guide explains everything you need to know about new boiler installation in London, including when to replace your boiler, the different types available, installation considerations, and how to find a qualified Gas Safe engineer.

Signs that it may be time for a new boiler include frequent breakdowns, rising energy bills, inconsistent heating or hot water, strange noises, difficulty sourcing replacement parts, or a boiler over 10-15 years old. Modern condensing boilers are significantly more efficient, reducing fuel consumption and heating costs. A new boiler also offers greater reliability, better heating performance, enhanced property value, and a reduced environmental impact.

Selecting the correct boiler type is one of the most important decisions. Combi boilers provide heating and hot water directly from a single compact unit, making them ideal for smaller and medium-sized homes. System boilers work alongside a separate hot water cylinder and are suitable for homes with higher hot water demand. Conventional boilers use both a hot water cylinder and a cold water storage tank, making them ideal for older properties or homes with very high hot water demand.

Boiler installation complexity varies based on type, property size, existing system condition, and required modifications. A professional heating engineer will assess your needs, provide a detailed quotation, and recommend the most suitable boiler output for your property. Modern heating controls, such as smart thermostats, can also improve energy savings and convenience.

All gas boiler installations must be completed by Gas Safe registered engineers to ensure legal compliance, safe installation, proper commissioning, and warranty protection. At London Climate Systems, our Gas Safe registered engineers deliver expert guidance and high-quality workmanship. Call London Climate Systems for pricing and to discuss your new boiler installation project.`,
    writtenBy: 'Masoud Moradi',
  },
  {
    title: 'Air Conditioning Installation in London: Costs, Benefits and What to Expect in 2026',
    description: `Air conditioning is no longer a luxury in the UK. Rising summer temperatures, improved technology, and increased energy efficiency have made it a practical solution for homes and businesses across London. Whether you want to improve comfort, indoor air quality, or property value, understanding the benefits, installation process, and maintenance requirements is essential. This guide explains everything you need to know before installing an air conditioning system in 2026.

Air conditioning provides temperature control, better sleep quality, improved air quality, year-round climate control, reduced humidity, and energy efficiency. Many modern systems are reversible heat pumps, capable of providing both cooling and heating, making them a practical solution for London properties.

Choosing the right system depends on your property size, budget, and requirements. Wall-mounted split systems are cost-effective and suitable for individual rooms. Multi-split systems connect multiple indoor units to a single outdoor unit, allowing for cooling in multiple rooms. Ducted systems distribute conditioned air through concealed ductwork, offering whole-home climate control with minimal visible equipment. Commercial properties may require larger solutions like VRF systems or cassette units.

The installation process typically includes an initial consultation, system design, installation day, testing, and customer handover. Most residential installations can be completed within one to two days. Factors such as room size, insulation levels, noise requirements, energy efficiency ratings, and future expansion plans should all be considered when selecting a system.

Proper system design and installation directly affect performance, energy efficiency, reliability, and system lifespan. Working with experienced F-Gas certified engineers ensures your equipment is installed safely and in accordance with industry standards. At London Climate Systems, our F-Gas certified engineers deliver expert system design and ongoing support. Call London Climate Systems for pricing and to arrange a site survey.`,
    writtenBy: 'Masoud Moradi',
  },
  {
    title: 'Emergency Plumbing Problems: What London Homeowners Should Do First',
    description: `Plumbing emergencies can happen without warning, often at the most inconvenient times. Whether it’s a burst pipe, overflowing toilet, major water leak, or sudden loss of water supply, acting quickly can minimise property damage and reduce repair costs. This guide explains the most common emergency plumbing problems in London, the first steps homeowners should take, and when to call a professional emergency plumber.

Not every plumbing issue requires immediate attention, but emergencies like burst pipes, major leaks, overflowing toilets, blocked drains causing flooding, loss of water supply, water tank leaks, boiler leaks, frozen pipes, or sewer backups need urgent action to prevent serious damage or safety risks.

If a pipe bursts, turn off the main water supply immediately, switch off electricity if water is near outlets, drain remaining water, collect escaping water, and call an emergency plumber. For major leaks, shut off the water supply, identify the source, protect belongings, and contact a professional. Overflowing toilets require stopping the flush, turning off the isolation valve, and clearing blockages safely.

Blocked drains may cause slow-draining sinks, bad odours, gurgling noises, or water backing up. Avoid chemical drain cleaners, as they can damage pipework. Professional drain clearance services can safely remove obstructions. A complete loss of water supply may be due to water main issues, frozen pipes, or internal plumbing faults. Before contacting a plumber, check if neighbours are affected and confirm the stopcock is open.

Frozen pipes are common in winter. If you suspect frozen pipes, keep taps slightly open, warm affected areas gradually, and contact a plumber if the pipe remains frozen or has burst. Boiler leaks should never be ignored; turn off the boiler if advised, isolate the water supply, and contact a qualified heating engineer. Water tank leaks can cause extensive damage to ceilings and lofts if not addressed quickly.

Preventing plumbing emergencies involves annual inspections, pipe insulation, leak monitoring, drain maintenance, boiler servicing, and knowing your stopcock location. Call an emergency plumber immediately for flooding, burst pipes, overflowing toilets, sewer backups, or significant boiler leaks. At London Climate Systems, our experienced engineers deliver fast, reliable solutions. Call London Climate Systems for pricing and emergency assistance.`,
    writtenBy: 'Masoud Moradi',
  },
  {
    title: 'How to Reduce Heating Bills in London Without Sacrificing Comfort',
    description: `Rising energy prices have made heating costs a major concern for London homeowners. The good news is that you can lower your heating bills without sacrificing comfort. By improving heating efficiency, maintaining your system properly, and making smart upgrades, you can significantly reduce energy consumption while keeping your property warm. This guide explains practical ways to cut heating costs in London.

High heating bills often result from inefficient boilers, poor insulation, incorrect thermostat settings, dirty heating systems, heat loss through windows and doors, outdated controls, or blocked radiators. Upgrading to a high-efficiency boiler is one of the most effective ways to reduce expenses. Modern condensing boilers consume less gas, lowering fuel consumption and energy bills while improving reliability and temperature control.

Regular boiler servicing helps maintain peak performance. During a service, engineers check combustion performance, identify worn components, clean essential parts, test safety systems, and optimise efficiency. Installing a smart thermostat allows for automated temperature control, remote access via smartphone, and tailored heating schedules, reducing unnecessary energy use.

Small adjustments, like lowering your thermostat by one degree, can noticeably reduce annual costs without affecting comfort. Balancing and bleeding radiators ensures even heat distribution and improves efficiency. A power flush can remove sludge, debris, and corrosion, restoring circulation and performance in older systems.

Improving loft and pipe insulation, sealing draughts around doors and windows, and using heating zones can all reduce heat loss and energy waste. Maintaining consistent temperatures and upgrading to modern heating controls further enhances efficiency. Addressing minor issues early, such as small leaks or faulty valves, prevents larger, costlier problems.

At London Climate Systems, we help homeowners improve heating efficiency and reduce energy costs with services like boiler servicing, power flushing, and smart thermostat integration. Call London Climate Systems for pricing and to discuss ways to improve your heating efficiency.`,
    writtenBy: 'Masoud Moradi',
  },
  {
    title: 'Air Conditioning Maintenance Checklist for London Homes and Offices',
    description: `Installing an air conditioning system is a significant investment in comfort, energy efficiency, and indoor air quality. Like any mechanical system, regular maintenance is essential for peak performance, longevity, and healthy indoor air. This guide explains the importance of air conditioning maintenance, provides a practical checklist for London homes and offices, and identifies warning signs that your system needs attention.

Neglecting maintenance often results in higher repair costs, reduced comfort, and unnecessary breakdowns. Regular servicing improves cooling performance, lowers energy consumption, extends equipment lifespan, enhances indoor air quality, and reduces unexpected failures. Most manufacturers recommend professional servicing at least once per year, with commercial properties benefiting from more frequent inspections.

Homeowners can perform monthly tasks like inspecting and cleaning air filters, checking airflow, and looking for water leaks, dust build-up, or unusual odours. At the start of each cooling season, clean around outdoor units, inspect pipework, and verify thermostat operation. Professional maintenance includes thorough filter inspection, coil cleaning, refrigerant level checks, electrical system inspection, drainage system checks, and fan and motor assessments.

Warning signs that your system needs attention include reduced cooling performance, higher energy bills, unusual noises, water leaks, bad odours, frequent cycling, or poor airflow. Regular servicing often reduces overall costs by improving efficiency, identifying minor issues early, and extending equipment life.

For businesses, routine maintenance is particularly important to reduce downtime, maintain employee comfort, and control operating expenses. At London Climate Systems, our F-Gas certified engineers provide expert maintenance and repair services. Call London Climate Systems for pricing and to arrange your air conditioning maintenance visit.`,
    writtenBy: 'Masoud Moradi',
  },
  {
    title: 'Preparing Your Heating System for Winter in London: A Complete Homeowner’s Checklist',
    description: `Winter places significant demands on heating systems in London. As temperatures drop, homeowners rely on their boilers, radiators, and central heating to keep properties warm and safe. Many breakdowns occur during the coldest months because small issues were not addressed beforehand. Preparing your heating system in advance can reduce the risk of unexpected failures, improve efficiency, lower costs, and ensure comfort throughout the season.

Boilers and central heating systems often show warning signs before breaking down. Proactive preparation helps reduce failure risk, improve energy efficiency, extend equipment lifespan, and identify safety concerns. One of the most important steps is booking an annual boiler service, which includes safety inspections, combustion checks, gas pressure testing, flue inspection, component assessment, and efficiency testing.

Check your boiler pressure regularly, as low pressure can cause reduced performance, system shutdowns, or inefficient operation. Bleed radiators to remove trapped air, which can cause cold spots, uneven heating, or slow warm-up times. Balance your heating system to ensure even heat distribution and reduce strain on the boiler.

Test your thermostat for accuracy, proper scheduling, and connectivity. Inspect exposed pipework in lofts, garages, and utility rooms, and add insulation to reduce heat loss and prevent freezing. Look for signs of boiler problems like strange noises, water leaks, pressure fluctuations, or error codes. Addressing issues early prevents larger breakdowns during cold weather.

Consider a power flush if your system has sludge build-up, which can cause cold radiators, noisy pipework, or reduced efficiency. Check carbon monoxide alarms to ensure they are working properly. Inspect radiator valves for leaks, corrosion, or improper operation, and verify hot water performance before winter demand increases.

Upgrade to modern heating controls like smart thermostats or zoned systems for better efficiency. Seal draughts around doors, windows, and pipe entry points to reduce heat loss. Know the location of your main water stopcock, boiler isolation valves, and electrical consumer unit for emergencies. At London Climate Systems, our Gas Safe registered engineers provide thorough inspections and practical solutions. Call London Climate Systems for pricing and to arrange a winter heating inspection.`,
    writtenBy: 'Masoud Moradi',
  }
];

async function seedBlogs() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data (optional)
    await Blog.deleteMany({});
    console.log('🗑️ Cleared existing blogs');

    // Save each blog individually to trigger pre-save middleware
    for (const blogData of testBlogs) {
      const blog = new Blog(blogData);
      await blog.save();
    }

    console.log(`✅ Successfully created ${testBlogs.length} test blog(s)`);

    await mongoose.disconnect();
    console.log('✅ Disconnected from MongoDB');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding blogs:', error);
    process.exit(1);
  }
}

seedBlogs();